// src/Pages/HomePage.js
import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="d-flex flex-column justify-content-center min-vh-100 p-3 bg-light text-dark">
      <Container className="text-center my-auto">
        <h1 className="fw-bold text-primary mb-3" style={{ fontSize: "2.5rem" }}>CareerLync</h1>
        <p className="text-muted mb-5">Connect with opportunities and talent</p>
        <div className="d-flex justify-content-center flex-column flex-md-row">
          <Button as={Link} to="/register" variant="dark" size="lg" className="w-100 mb-3 me-md-3">
            Get Started
          </Button>
          <Button as={Link} to="/login" variant="outline-dark" size="lg" className="w-100 mb-3">
            Log In
          </Button>
        </div>
      </Container>
      <Container className="mt-auto pt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-4">
            <Card className="p-4 bg-white border-secondary">
              <h4 className="fw-bold">For Job Seekers</h4>
              <ul className="small text-muted ps-3 mb-0">
                <li>Create your professional profile</li>
                <li>Browse and apply for jobs</li>
                <li>Track your applications</li>
              </ul>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="p-4 bg-white border-secondary">
              <h4 className="fw-bold">For Employers</h4>
              <ul className="small text-muted ps-3 mb-0">
                <li>Post job openings</li>
                <li>Review applicants</li>
                <li>Find the perfect candidate</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;