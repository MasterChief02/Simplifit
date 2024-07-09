import React, { useState } from 'react';
import { Carousel, Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import './CarouselForm.css';

function CarouselForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    favorite_snacks: '',
    breakfast: '',
    daily_water: '',
    veg_non_veg: '',
    lunch: '',
    eating_out: '',
    walk_exercise: '',
    dinner: '',
    surgery: '',
    stress: '',
    cravings: '',
    coffee_tea_soda: '',
    bleeding_gums: false,
    day_time_sleeping_lazy: false,
    night_sleep_frequent_urination: false,
    dandruff_hair_fall: false,
    motion_problem: false,
    acidity_gastric: false,
    body_pain: false,
    asthma_wheezing_breathlessness: false,
    sneezing_dust_allergy: false,
    skin_problem: false,
    regular_medication: false,
    medication_for_what: '',
  });

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
            {renderTextInput('favorite_snacks', 'Favorite Snacks')}
            {renderTextInput('breakfast', 'Breakfast')}
            {renderTextInput('daily_water', 'Daily Water Intake')}
            {renderTextInput('veg_non_veg', 'Vegetarian or Non-Vegetarian')}
            {renderTextInput('lunch', 'Lunch')}
            {renderTextInput('eating_out', 'Eating Out Frequency')}
            {renderTextInput('dinner', 'Dinner')}
          </div>
        </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Lifestyle & Health</h3>
            <div className="scrollable-carousel-item">
            {renderTextInput('walk_exercise', 'Walk/Exercise Routine')}
            {renderTextInput('surgery', 'Recent Surgeries')}
            {renderTextInput('stress', 'Stress Level')}
            {renderTextInput('cravings', 'Food Cravings')}
            {renderTextInput('coffee_tea_soda', 'Coffee/Tea/Soda Consumption')}
          </div>
        </Carousel.Item>

        <Carousel.Item className='mb-5'>
          <h3 className="text-success">Health Conditions</h3>
          <div className="scrollable-carousel-item">
            {renderCheckbox('bleeding_gums', 'Bleeding Gums')}
            {renderCheckbox('day_time_sleeping_lazy', 'Daytime Sleepiness/Laziness')}
            {renderCheckbox('night_sleep_frequent_urination', 'Night Sleep Disruption/Frequent Urination')}
            {renderCheckbox('dandruff_hair_fall', 'Dandruff/Hair Fall')}
            {renderCheckbox('motion_problem', 'Motion Problems')}
            {renderCheckbox('acidity_gastric', 'Acidity/Gastric Issues')}
            {renderCheckbox('body_pain', 'Body Pain')}
            {renderCheckbox('asthma_wheezing_breathlessness', 'Asthma/Wheezing/Breathlessness')}
            {renderCheckbox('sneezing_dust_allergy', 'Sneezing/Dust Allergy')}
            {renderCheckbox('skin_problem', 'Skin Problems')}
            {renderCheckbox('regular_medication', 'Regular Medication')}
            {formData.regular_medication && renderTextInput('medication_for_what', 'Medication For')}
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="mt-3">
        <Button variant="outline-success" onClick={() => setIndex(index - 1)} disabled={index === 0}>
          Previous
        </Button>{' '}
        {index < 2 ? (
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