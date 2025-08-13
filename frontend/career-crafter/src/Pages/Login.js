// src/Pages/Login.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post('https://localhost:7008/api/Auth/login', {
        email,
        password
      });

      const { token, refreshToken } = response.data;
      login(token, refreshToken);

      const decoded = jwtDecode(token);
      const userId =
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      const rawRole =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      const role = rawRole?.toLowerCase();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      if (role === "employer") {
        try {
          await axios.get(`https://localhost:7008/api/Employer/user/${userId}`, config);
          navigate("/employer/dashboard");
        } catch (error) {
          if (error.response?.status === 404) {
            navigate("/profile-setup");
          } else {
            throw error;
          }
        }
      } else if (role === "jobseeker") {
        try {
          await axios.get(`https://localhost:7008/api/JobSeeker/user/${userId}`, config);
          navigate("/jobseeker/dashboard");
        } catch (error) {
          if (error.response?.status === 404) {
            navigate("/profile-setup");
          } else {
            throw error;
          }
        }
      } else {
        setErrorMsg("Unknown role.");
      }
    } catch (error) {
      const serverError = error.response?.data;
      const message =
        typeof serverError === 'string'
          ? serverError
          : serverError?.message || 'Login failed. Please try again.';
      setErrorMsg(message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ maxWidth: '400px' }} className="w-100 p-4">
        <h2 className="mb-4 text-center">Login</h2>
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="primary" className="w-100 mt-3">
            Login
          </Button>
        </Form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Card>
    </Container>
  );
}

export default Login;