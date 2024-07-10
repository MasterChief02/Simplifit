import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import './WellnessData.css';
import HealthMetrics from './HealthMetrics';
import BodyMeasurements from './BodyMeasurements';
import PersonalEvaluation from './PersonalEvaluation';


const WellnessData = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const storedId = localStorage.getItem('id');
    if (storedId === '-1') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="user-data-wrapper">
      <header className="user-data-header">SimpliFit: it's Simple to be Fit</header>
      <Container fluid className="user-data-container">
        <div className="py-4 px-3 shadow-lg user-data-res-box bg-white rounded-4">
          <div className='d-flex'>
            <Button
              variant="outline-secondary"
              onClick={handleGoBack}
              className="mb-3"
            >
              &larr; Back
            </Button>
            <h2
              className="text-success font-weight-bold text-center mb-4 mx-auto"
            >
              Wellness Data
            </h2>
          </div>
          <HealthMetrics />
          <BodyMeasurements />
          <PersonalEvaluation />
        </div>
      </Container>
      <footer className="user-data-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default WellnessData;