import React, { useState } from 'react';
import { Carousel, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import './CarouselForm.css';
import axios from 'axios';

function CarouselForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    weight: '',
    bodyFatPercentage: 0,
    visceralFatPercentage: 0,
    rmKcal: '',
    bmi: '',
    bodyAge: '',
    wholeBodySf: 0,
    wholeBodySkm: 0,
    trunkSf: 0,
    trunkSkm: 0,
    armsSf: 0,
    armsSkm: 0,
    legsSf: 0,
    legsSkm: 0,
  });
  const [status, setStatus] = useState('');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/healthmetrics', {
        user: {
          id: 1
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
          />
          <InputGroup.Text className='form-unit'>%</InputGroup.Text>
        </InputGroup>
      </div>
    </Form.Group>
  );

  return (
    <>
    {status && (
      <Alert 
        variant={status === 'success' ? 'success' : 'danger'} 
        className="position-fixed top-0 start-50 translate-middle-x mt-3 z-index-1000"
      >
        {status === 'success' ? 'Form submitted successfully!' : 'Error submitting form. Please try again.'}
      </Alert>
    )}
    <Form onSubmit={handleSubmit}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="green-carousel"
        touch={false}
      >
        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Health Metrics</h3>
          <Form.Group className="mb-3">
            <Form.Label>Body Age</Form.Label>
            <InputGroup className='mx-auto'>
              <Form.Control
                type="number"
                name="bodyAge"
                value={formData.bodyAge}
                onChange={handleChange}
                className='text-center'
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Weight</Form.Label>
            <InputGroup className='mx-auto'>
              <Form.Control
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className='text-center'
              />
              <InputGroup.Text className='form-unit'>kg</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>BMI</Form.Label>
            <InputGroup className='mx-auto'>
              <Form.Control
                type="number"
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
                className='text-center'
              />
              <InputGroup.Text className='form-unit'>kg/m2</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>RM</Form.Label>
            <InputGroup className='mx-auto'>
              <Form.Control
                type="number"
                name="rmKcal"
                value={formData.rmKcal}
                onChange={handleChange}
                className='text-center'
              />
              <InputGroup.Text className='form-unit'>kcal</InputGroup.Text>
            </InputGroup>
          </Form.Group>
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
              e.preventDefault();  // Prevent form submission
              setIndex(index + 1);
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