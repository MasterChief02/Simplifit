import React, { useState } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import './Form.css';
import CarouselForm from './CarouselForm';

const InfoForm = () => {

  return (
    <div className="form-wrapper">
      <header className="form-header">SimpliFit: it's Simple to be Fit</header>
      <Container fluid className="form-container">
        <div
          className="py-4 px-5 shadow-lg form-box bg-white rounded-4"
          style={
            {
              maxWidth: '400px',
            }
          }
        >
          <CarouselForm />
        </div>
      </Container>
      <footer className="form-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default InfoForm;
