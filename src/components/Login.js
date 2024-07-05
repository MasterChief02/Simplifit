import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated user credentials (replace with actual authentication logic)
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      // Successful login logic (redirect or set session, etc.)
      alert('Login Successful!');
      setError('');
      setUsername('');
      setPassword('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-wrapper">
      <header className="login-header">SimpliFit</header>
      <Container className="login-container">
        <Card className="p-4 shadow-lg login-box">
          <h2 className="text-center mb-4">Welcome to SimpliFit</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
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
