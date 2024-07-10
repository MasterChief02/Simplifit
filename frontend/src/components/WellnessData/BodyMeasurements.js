import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';

const BodyMeasurements = () => {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/bodymeasurements');
        const userMeasurements = response.data.filter(measurement => measurement.user.i === 1)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setMeasurements(userMeasurements);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {measurements.length > 0 && (
        <Card className="mb-4 border-success">
          <Card.Header className="bg-success text-white">
            <h2>Body Measurements</h2>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead className="bg-success text-white">
                <tr>
                  <th>Date</th>
                  <th>Neck (cm)</th>
                  <th>Chest (cm)</th>
                  <th>Trunk (cm)</th>
                  <th>Waist (cm)</th>
                  <th>Hips (cm)</th>
                  <th>Upper Arms (cm)</th>
                  <th>Lower Arms (cm)</th>
                </tr>
              </thead>
              <tbody>
                {measurements.map((measurement) => (
                  <tr key={measurement.id}>
                    <td>{new Date(measurement.date).toLocaleDateString()}</td>
                    <td>{measurement.neck}</td>
                    <td>{measurement.chest}</td>
                    <td>{measurement.trunk}</td>
                    <td>{measurement.waist}</td>
                    <td>{measurement.hips}</td>
                    <td>{measurement.armsUpper}</td>
                    <td>{measurement.armsLower}</td>
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

export default BodyMeasurements;