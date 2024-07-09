import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import './Form.css';
import CarouselForm from './CarouselForm';

const InfoForm = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="form-wrapper">
      <header className="form-header">SimpliFit: it's Simple to be Fit</header>
      <Container fluid className="form-container">
        <div
          className="py-4 px-5 shadow-lg form-res-box bg-white rounded-4"
        >
          <Button
            variant="outline-secondary" 
            onClick={handleGoBack} 
            className="mb-3"
          >
            &larr; Back
          </Button>
          <CarouselForm />
        </div>
      </Container>
      <footer className="form-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default InfoForm;
