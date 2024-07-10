import React, { useState } from 'react';
import { Container, Form, Button, Card, ProgressBar } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './Tracker.css';

const Tracker = () => {
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);
  const [steps, setSteps] = useState(0);

  const dailyGoals = {
    water: 8,
    calories: 2000,
    steps: 10000,
  };

  const calculatePercentage = (value, goal) => Math.min((value / goal) * 100, 100);

  const data = [
    { name: 'Steps', value: calculatePercentage(steps, dailyGoals.steps) },
    { name: 'Calories', value: calculatePercentage(calories, dailyGoals.calories) },
    { name: 'Water', value: calculatePercentage(water, dailyGoals.water) },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  const handleWaterIncrement = () => {
    setWater(water + 1);
  };

  return (
    <div className="tracker-wrapper">
      <header className="login-header">SimpliFit Tracker</header>
      <Container fluid className="login-container">
        <Card className="p-3 shadow-lg login-box">
          <h2 className="text-center mb-3">Daily Tracker</h2>

          <Form className="w-75 justify-content-center mx-auto">
            <Form.Group controlId="caloriesTracker">
              <Form.Label className="form-label">Calorie Tracker</Form.Label>
              <Form.Control
                className="login-input"
                type="number"
                placeholder="Enter calories consumed"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
              />
            </Form.Group>

            <Form.Group controlId="waterTracker" className="text-center mt-3">
              <Form.Label className="form-label">Water Tracker</Form.Label>
              <div>
                <Button variant="primary" onClick={handleWaterIncrement}>
                  +
                </Button>
              </div>
              <p>{water} glasses of water consumed</p>
            </Form.Group>

            <Form.Group controlId="stepsTracker">
              <Form.Label className="form-label">Step Counter</Form.Label>
              <Form.Control
                className="login-input"
                type="number"
                placeholder="Enter steps taken"
                value={steps}
                onChange={(e) => setSteps(Number(e.target.value))}
              />
            </Form.Group>
          </Form>

          <div className="mt-3 text-center daily-goals">
            <h4>Daily Goals</h4>
            <ProgressBar now={calculatePercentage(water, dailyGoals.water)} label={`${water}/${dailyGoals.water} glasses`} />
            <ProgressBar now={calculatePercentage(calories, dailyGoals.calories)} label={`${calories}/${dailyGoals.calories} cal`} />
            <ProgressBar now={calculatePercentage(steps, dailyGoals.steps)} label={`${steps}/${dailyGoals.steps} steps`} />
          </div>

          <div className="mt-3 chart-container">
            <PieChart width={300} height={300}>
              <Pie
                data={[{ value: calculatePercentage(steps, dailyGoals.steps) }]}
                cx={150}
                cy={70}
                startAngle={90}
                endAngle={90 + (360 * calculatePercentage(steps, dailyGoals.steps)) / 100}
                innerRadius={60}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                <Cell key="steps" fill={COLORS[0]} />
              </Pie>
              <Pie
                data={[{ value: calculatePercentage(calories, dailyGoals.calories) }]}
                cx={150}
                cy={70}
                startAngle={90}
                endAngle={90 + (360 * calculatePercentage(calories, dailyGoals.calories)) / 100}
                innerRadius={50}
                outerRadius={60}
                fill="#82ca9d"
                paddingAngle={5}
                dataKey="value"
              >
                <Cell key="calories" fill={COLORS[1]} />
              </Pie>
              <Pie
                data={[{ value: calculatePercentage(water, dailyGoals.water) }]}
                cx={150}
                cy={70}
                startAngle={90}
                endAngle={90 + (360 * calculatePercentage(water, dailyGoals.water)) / 100}
                innerRadius={40}
                outerRadius={50}
                fill="#ffc658"
                paddingAngle={5}
                dataKey="value"
              >
                <Cell key="water" fill={COLORS[2]} />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </Card>
      </Container>
      <footer className="login-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default Tracker;
