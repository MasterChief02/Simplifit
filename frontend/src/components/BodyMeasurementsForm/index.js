import React from 'react';
import { Container } from 'react-bootstrap';
import './Form.css';
import CarouselForm from './CarouselForm';

const PersonalEvaluationForm = () => {
  return (
    <div className="form-wrapper">
      <header className="form-header">SimpliFit: it's Simple to be Fit</header>
      <Container fluid className="form-container">
        <div className="py-4 px-3 px-md-5 shadow-lg form-res-box bg-white rounded-4">
          <CarouselForm />
        </div>
      </Container>
      <footer className="form-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default PersonalEvaluationForm;