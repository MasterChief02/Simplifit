import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const username = location.state?.username || 'User';

  const [calories, setCalories] = useState('');
  const [water, setWater] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Submitted:', { calories, water, weight });
    // Clear form after submission
    setCalories('');
    setWater('');
    setWeight('');
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h2 className="text-center mb-4">Welcome, {username}!</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Calories Intake</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Glasses of Water</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number of glasses"
              value={water}
              onChange={(e) => setWater(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Body Weight (kg)</Form.Label>
            <Form.Control
              type="number"
              step="0.1"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Dashboard;