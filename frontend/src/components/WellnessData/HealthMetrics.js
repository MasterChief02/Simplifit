import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';

const HealthMetrics = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/healthmetrics');
        const userMetrics = response.data.filter(metric => metric.user.i === 1)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setMetrics(userMetrics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {metrics.length > 0 && (
        <Card className="mb-4 border-success">
          <Card.Header className="bg-success text-white">
            <h2>Health Metrics</h2>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead className="bg-success text-white">
                <tr>
                  <th>Date</th>
                  <th>Weight (kg)</th>
                  <th>Body Fat %</th>
                  <th>Visceral Fat %</th>
                  <th>RMKcal</th>
                  <th>BMI</th>
                  <th>Body Age</th>
                  <th>Whole Body SF</th>
                  <th>Whole Body SKM</th>
                  <th>Trunk SF</th>
                  <th>Trunk SKM</th>
                  <th>Arms SF</th>
                  <th>Arms SKM</th>
                  <th>Legs SF</th>
                  <th>Legs SKM</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((metric) => (
                  <tr key={metric.id}>
                    <td>{new Date(metric.date).toLocaleDateString()}</td>
                    <td>{metric.weight}</td>
                    <td>{metric.bodyFatPercentage}</td>
                    <td>{metric.visceralFatPercentage}</td>
                    <td>{metric.rmKcal}</td>
                    <td>{metric.bmi}</td>
                    <td>{metric.bodyAge}</td>
                    <td>{metric.wholeBodySf}</td>
                    <td>{metric.wholeBodySkm}</td>
                    <td>{metric.trunkSf}</td>
                    <td>{metric.trunkSkm}</td>
                    <td>{metric.armsSf}</td>
                    <td>{metric.armsSkm}</td>
                    <td>{metric.legsSf}</td>
                    <td>{metric.legsSkm}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default HealthMetrics;