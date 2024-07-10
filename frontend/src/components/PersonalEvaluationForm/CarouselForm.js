import React, { useState } from 'react';
import { Carousel, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './CarouselForm.css';

function CarouselForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    favoriteSnacks: '',
    breakfast: '',
    dailyWater: '',
    vegNonVeg: '',
    lunch: '',
    eatingOut: '',
    walkExercise: '',
    dinner: '',
    surgery: '',
    stress: '',
    cravings: '',
    coffeeTeaSoda: '',
    bleedingGums: false,
    dayTimeSleepingLazy: false,
    nightSleepFrequentUrination: false,
    dandruffHairFall: false,
    motionProblem: false,
    acidityGastric: false,
    bodyPain: false,
    asthmaWheezingBreathlessness: false,
    sneezingDustAllergy: false,
    skinProblem: false,
    regularMedication: false,
    medicationForWhat: '',
  });
  const [status, setStatus] = useState('');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/personalevaluation', {
        user: { i: 1 },
        ...formData
      });
      console.log('Form submitted:', response.data);
      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const renderTextInput = (name, label) => (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        name={name}
        value={formData[name]}
        onChange={handleChange}
      />
    </Form.Group>
  );

  const renderCheckbox = (name, label) => (
    <Form.Group className="mb-3">
      <Form.Check
        type="checkbox"
        label={label}
        name={name}
        checked={formData[name]}
        onChange={handleChange}
      />
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
          <h3 className="text-success">Dietary Habits</h3>
          <div className="scrollable-carousel-item">
            {renderTextInput('favoriteSnacks', 'Favorite Snacks')}
            {renderTextInput('breakfast', 'Breakfast')}
            {renderTextInput('dailyWater', 'Daily Water Intake')}
            {renderTextInput('vegNonVeg', 'Vegetarian or Non-Vegetarian')}
            {renderTextInput('lunch', 'Lunch')}
            {renderTextInput('eatingOut', 'Eating Out Frequency')}
            {renderTextInput('dinner', 'Dinner')}
          </div>
        </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Lifestyle & Health</h3>
            <div className="scrollable-carousel-item">
            {renderTextInput('walkExercise', 'Walk/Exercise Routine')}
            {renderTextInput('surgery', 'Recent Surgeries')}
            {renderTextInput('stress', 'Stress Level')}
            {renderTextInput('cravings', 'Food Cravings')}
            {renderTextInput('coffeeTeaSoda', 'Coffee/Tea/Soda Consumption')}
          </div>
        </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Health Conditions</h3>
          <div className="scrollable-carousel-item">
            {renderCheckbox('bleedingGums', 'Bleeding Gums')}
            {renderCheckbox('dayTimeSleepingLazy', 'Daytime Sleepiness/Laziness')}
            {renderCheckbox('nightSleepFrequentUrination', 'Night Sleep Disruption/Frequent Urination')}
            {renderCheckbox('dandruffHairFall', 'Dandruff/Hair Fall')}
            {renderCheckbox('motionProblem', 'Motion Problems')}
            {renderCheckbox('acidityGastric', 'Acidity/Gastric Issues')}
            {renderCheckbox('bodyPain', 'Body Pain')}
            {renderCheckbox('asthmaWheezingBreathlessness', 'Asthma/Wheezing/Breathlessness')}
            {renderCheckbox('sneezingDustAllergy', 'Sneezing/Dust Allergy')}
            {renderCheckbox('skinProblem', 'Skin Problems')}
            {renderCheckbox('regularMedication', 'Regular Medication')}
            {formData.regularMedication && renderTextInput('medicationForWhat', 'Medication For')}
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
        {index < 2 ? (
          <Button
            variant="success"
            onClick={(e) => {
              e.preventDefault();
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