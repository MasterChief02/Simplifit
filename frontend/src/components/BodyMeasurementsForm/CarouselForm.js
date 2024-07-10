import React, { useState } from 'react';
import { Carousel, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './CarouselForm.css';

function BodyMeasurementsForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    neck: '',
    chest: '',
    trunk: '',
    waist: '',
    hips: '',
    armsUpper: '',
    armsLower: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (formData[key] && (isNaN(formData[key]) || parseFloat(formData[key]) <= 0)) {
        newErrors[key] = 'Please enter a valid positive number';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/bodymeasurements', {
          user: { i: 1 },
          date: new Date().toISOString().split('T')[0],
          ...formData
        });
        console.log('Form submitted:', response.data);
        setStatus('success');
      } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('error');
      }
    } else {
      setStatus('error');
    }
  };

  const renderDecimalInput = (name, label) => (
    <Form.Group className="mb-3">
      <Form.Label>{label} (cm)</Form.Label>
      <Form.Control
        type="number"
        step="0.01"
        min="0.01"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        isInvalid={!!errors[name]}
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
    </Form.Group>
  );

  return (
    <>
    {status && (
      <Alert 
        variant={status === 'success' ? 'success' : 'danger'} 
        className="position-fixed top-0 start-50 translate-middle-x mt-3 z-index-1000"
      >
        {status === 'success' ? 'Form submitted successfully!' : 'Error submitting form. Please check the fields and try again.'}
      </Alert>
    )}
    <Form onSubmit={handleSubmit} noValidate>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="green-carousel"
        touch={false}
      >
        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Upper Body Measurements</h3>
          <div className="scrollable-carousel-item">
            {renderDecimalInput('neck', 'Neck Circumference')}
            {renderDecimalInput('chest', 'Chest Circumference')}
            {renderDecimalInput('trunk', 'Trunk Length')}
            {renderDecimalInput('armsUpper', 'Upper Arms Circumference')}
          </div>
        </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Lower Body Measurements</h3>
          <div className="scrollable-carousel-item">
            {renderDecimalInput('waist', 'Waist Circumference')}
            {renderDecimalInput('hips', 'Hips Circumference')}
            {renderDecimalInput('armsLower', 'Lower Arms Circumference')}
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="mt-3">
        <Button 
          variant="outline-success" 
          onClick={() => setIndex(index - 1)} 
          disabled={index === 0}
          type="button"
        >
          Previous
        </Button>{' '}
        {index < 1 ? (
          <Button 
            variant="success" 
            onClick={(e) => {
              e.preventDefault();
              if (validateForm()) {
                setIndex(index + 1);
              }
            }}
            type="button"
          >
            Next
          </Button>
        ) : (
          <Button variant="success" type="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
    </>
  );
}

export default BodyMeasurementsForm;