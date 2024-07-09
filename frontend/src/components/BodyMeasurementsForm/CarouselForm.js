import React, { useState } from 'react';
import { Carousel, Form, Button } from 'react-bootstrap';
import './CarouselForm.css';

function BodyMeasurementsForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    neck: '',
    chest: '',
    trunk: '',
    waist: '',
    hips: '',
    arms_upper: '',
    arms_lower: '',
  });

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setFormData({ ...formData, [name]: numValue.toFixed(2) });
    } else {
      setFormData({ ...formData, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      />
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
        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Upper Body Measurements</h3>
          <div className="scrollable-carousel-item">
            {renderDecimalInput('neck', 'Neck Circumference')}
            {renderDecimalInput('chest', 'Chest Circumference')}
            {renderDecimalInput('trunk', 'Trunk Length')}
            {renderDecimalInput('arms_upper', 'Upper Arms Circumference')}
          </div>
        </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Lower Body Measurements</h3>
          <div className="scrollable-carousel-item">
            {renderDecimalInput('waist', 'Waist Circumference')}
            {renderDecimalInput('hips', 'Hips Circumference')}
            {renderDecimalInput('arms_lower', 'Lower Arms Circumference')}
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

export default BodyMeasurementsForm;