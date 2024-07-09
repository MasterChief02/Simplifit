import React, { useState } from 'react';
import { Carousel, Form, Button, InputGroup } from 'react-bootstrap';
import './CarouselForm.css';

function CarouselForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    bmi: '',
    rm: '',
    bodyFat: 0,
    visceralFat: 0,
    wholeBodySF: 0,
    wholeBodySKM: 0,
    trunkSF: 0,
    trunkSKM: 0,
    armsSF: 0,
    armsSKM: 0,
    legsSF: 0,
    legsSKM: 0,
  });

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
        <InputGroup
            style={{ width: '165px', marginLeft: '5px' }}
        >
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
    <Form onSubmit={handleSubmit}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="green-carousel"
        touch={false}
      >
        <Carousel.Item
          className='mb-5'
        >
          <h3 className="text-success">Health Metrics</h3>
          <Form.Group
            className="mb-3"
          >
            <Form.Label>Age</Form.Label>
            <InputGroup
              className='mx-auto'
            >
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className='text-center'
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Weight</Form.Label>
            <InputGroup
              className='mx-auto'
            >
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
            <InputGroup
              className='mx-auto'
            >
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
            <InputGroup
              className='mx-auto'
            >
              <Form.Control
                type="number"
                name="rm"
                value={formData.rm}
                onChange={handleChange}
                className='text-center'
              />
              <InputGroup.Text className='form-unit'>kcl</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <div className="scrollable-carousel-item">
            <h3 className="text-success">Health Metrics</h3>
            {renderRangeInput('bodyFat', 'Body Fat')}
            {renderRangeInput('visceralFat', 'Visceral Fat')}
            {renderRangeInput('wholeBodySF', 'Whole Body SF')}
            {renderRangeInput('wholeBodySKM', 'Whole Body SKM')}
            {renderRangeInput('trunkSF', 'Trunk SF')}
            {renderRangeInput('trunkSKM', 'Trunk SKM')}
            {renderRangeInput('armsSF', 'Arms SF')}
            {renderRangeInput('armsSKM', 'Arms SKM')}
            {renderRangeInput('legsSF', 'Legs SF')}
            {renderRangeInput('legsSKM', 'Legs SKM')}
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="mt-3">
        <Button variant="outline-success" onClick={() => setIndex(index - 1)} disabled={index === 0}>
          Previous
        </Button>{' '}
        {index < 1 ? (
          <Button variant="success" onClick={() => setIndex(index + 1)}>
            Next
          </Button>
        ) : (
          <Button variant="success" type="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
}

export default CarouselForm;