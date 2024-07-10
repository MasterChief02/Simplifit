import React, { useState, useEffect } from 'react';
import { Carousel, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import './CarouselForm.css';
import axios from 'axios';

function CarouselForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    weight: '',
    bodyFatPercentage: 50,
    visceralFatPercentage: 50,
    rmKcal: '',
    bmi: '',
    bodyAge: '',
    wholeBodySf: 50,
    wholeBodySkm: 50,
    trunkSf: 50,
    trunkSkm: 50,
    armsSf: 50,
    armsSkm: 50,
    legsSf: 50,
    legsSkm: 50,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (formData.weight && formData.height) {
      const weightKg = parseFloat(formData.weight);
      const heightM = parseFloat(formData.height);
      if (!isNaN(weightKg) && !isNaN(heightM) && heightM > 0) {
        const bmi = (weightKg / (heightM * heightM)).toFixed(2);
        setFormData(prevData => ({ ...prevData, bmi }));
      }
    }
  }, [formData.weight, formData.height]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== '' && isNaN(value)) {
        newErrors[key] = 'Please enter a valid number';
      } else if (value !== '' && parseFloat(value) <= 0) {
        newErrors[key] = 'Please enter a positives number';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/healthmetrics', {
          user: {
            i: 1
          },
          date: new Date().toISOString().split('T')[0],
          ...formData
        });
        if (response.status === 200) {
          setStatus('success');
        }
        console.log('API Response:', response.data);
      } catch (error) {
        setStatus('error');
        console.error('Error submitting form:', error);
      }
    } else {
      setStatus('error');
    }
  };

  const renderRangeInput = (name, label) => (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <div className="d-flex align-items-center">
        <Form.Range
          name={name}
          value={formData[name]}
          onChange={handleChange}
          min="0"
          max="100"
          step="0.1"
        />
        <InputGroup style={{ width: '165px', marginLeft: '5px' }}>
          <Form.Control
            type="number"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            isInvalid={!!errors[name]}
          />
          <InputGroup.Text className='form-unit'>%</InputGroup.Text>
          <Form.Control.Feedback type="invalid">
            {errors[name]}
          </Form.Control.Feedback>
        </InputGroup>
      </div>
    </Form.Group>
  );

  const renderNumberInput = (name, label, unit, readOnly = false) => (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <InputGroup className='mx-auto'>
        <Form.Control
          type="number"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className='text-start'
          isInvalid={!!errors[name]}
          readOnly={readOnly}
        />
        {unit && <InputGroup.Text className='form-unit'>{unit}</InputGroup.Text>}
        <Form.Control.Feedback type="invalid">
          {errors[name]}
        </Form.Control.Feedback>
      </InputGroup>
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
        <h3 className="text-success">Health Metrics</h3>
        {renderNumberInput('bodyAge', 'Body Age')}
        {renderNumberInput('weight', 'Weight', 'kg')}
        {renderNumberInput('height', 'Height', 'm')}
        {renderNumberInput('bmi', 'BMI', 'kg/m2', true)}
        {renderNumberInput('rmKcal', 'RM', 'kcal')}
      </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <div className="scrollable-carousel-item">
            <h3 className="text-success">Health Metrics</h3>
            {renderRangeInput('bodyFatPercentage', 'Body Fat')}
            {renderRangeInput('visceralFatPercentage', 'Visceral Fat')}
            {renderRangeInput('wholeBodySf', 'Whole Body SF')}
            {renderRangeInput('wholeBodySkm', 'Whole Body SKM')}
            {renderRangeInput('trunkSf', 'Trunk SF')}
            {renderRangeInput('trunkSkm', 'Trunk SKM')}
            {renderRangeInput('armsSf', 'Arms SF')}
            {renderRangeInput('armsSkm', 'Arms SKM')}
            {renderRangeInput('legsSf', 'Legs SF')}
            {renderRangeInput('legsSkm', 'Legs SKM')}
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

export default CarouselForm;