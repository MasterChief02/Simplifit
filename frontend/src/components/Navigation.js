import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './Navigation.css'; // We'll create this file for the styles

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-wrapper">
      <header className="nav-header">SimpliFit: it's Simple to be Fit</header>
      <Container fluid className="nav-container">
        <div className="nav-box">
          <h2>Fill your details</h2>
          <Button 
            className="nav-button" 
            onClick={() => navigate('/pef')}
          >
            Personal Evaluation Form
          </Button>
          <Button 
            className="nav-button" 
            onClick={() => navigate('/hmf')}
          >
            Health   Metrics   Form
          </Button>
          <Button 
            className="nav-button" 
            onClick={() => navigate('/bmf')}
          >
            Body Measurements Form
          </Button>
          <Button
            className="nav-button"
            onClick={() => navigate('/wellness')}
          >
            See your Wellness Data here
          </Button>
          <Button
            className="nav-button"
            onClick={() => navigate('/tracker')}
          >
            Trackers
          </Button>
        </div>
      </Container>
      <footer className="nav-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default Navigation;