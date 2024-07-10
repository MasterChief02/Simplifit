import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await axios.post('http://localhost:8080/api/users/', { username, password });
      
      if (response.data === "success") {
        // Successful login logic
        alert('Login Successful!');
        setUsername('');
        setPassword('');
        navigate('/navigation', { state: { username: username } });
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <header className="login-header">SimpliFit: it's Simple to be Fit</header>
      <Container fluid className="login-container">
        <Card className="p-5 w-26 shadow-lg login-box">
          <h2 className="text-center mb-4">Welcome to SimpliFit</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="w-75 justify-content-center mx-auto" onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                className="login-input"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="login-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Card>
      </Container>
      <footer className="login-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default Login;
