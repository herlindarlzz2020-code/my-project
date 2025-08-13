
// src/Pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Card, Form, Button, Alert, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('JobSeeker');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      await axios.post('https://localhost:7008/api/Auth/register', {
        email,
        password,
        userName: fullName,
        role
      });

      setSuccessMsg('Registered successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMsg(error.response.data || 'Registration failed. Try again.');
      } else {
        setErrorMsg('Server error. Please try again.');
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ maxWidth: '400px' }} className="w-100 p-4">
        <h2 className="mb-4 text-center">Register</h2>
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          {/* Role Selection Toggle Buttons */}
          <Form.Group className="mb-3 text-center">
            <ToggleButtonGroup
              type="radio"
              name="role"
              value={role}
              onChange={(val) => setRole(val)}
              className="w-100"
            >
              <ToggleButton
                id="tbg-btn-1"
                value="JobSeeker"
                variant={role === "JobSeeker" ? "primary" : "outline-primary"}
              >
                Job Seeker
              </ToggleButton>
              <ToggleButton
                id="tbg-btn-2"
                value="Employer"
                variant={role === "Employer" ? "primary" : "outline-primary"}
              >
                Employer
              </ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="success" className="w-100 mt-3">
            Register
          </Button>
        </Form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Card>
    </Container>
  );
}

export default Register;