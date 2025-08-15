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


// src/Pages/HomePage.js
import React from "react";
import { Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BriefcaseFill, PeopleFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section text-center text-light">
        <Container>
          <h1 className="fw-bold display-3 animate-fade">CareerLync</h1>
          <p className="lead mb-4 animate-fade-delay">
            Your gateway to <strong>dream jobs</strong> and <strong>top talent</strong>
          </p>
          <div className="d-flex justify-content-center flex-column flex-md-row">
            <Button
              as={Link}
              to="/register"
              variant="light"
              size="lg"
              className="w-100 mb-3 me-md-3 shadow"
            >
              Get Started
            </Button>
            <Button
              as={Link}
              to="/login"
              variant="outline-light"
              size="lg"
              className="w-100 mb-3 shadow"
            >
              Log In
            </Button>
          </div>
        </Container>
      </section>

      {/* Carousel Section */}
      <Container className="py-5">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://source.unsplash.com/1600x500/?career,office"
              alt="Career Opportunities"
            />
            <Carousel.Caption>
              <h3>Find Your Dream Job</h3>
              <p>Thousands of opportunities at your fingertips</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://source.unsplash.com/1600x500/?teamwork,workplace"
              alt="Employers"
            />
            <Carousel.Caption>
              <h3>Hire Top Talent</h3>
              <p>Connect with skilled professionals easily</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://source.unsplash.com/1600x500/?success,business"
              alt="Success"
            />
            <Carousel.Caption>
              <h3>Grow Your Career</h3>
              <p>Learning and growth at every step</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Who We Help Section */}
      <Container className="py-5">
        <Row className="text-center mb-4">
          <h2 className="fw-bold">Who We Help</h2>
          <p className="text-muted">We connect the right people to the right opportunities</p>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-4">
            <Card className="p-4 shadow card-hover">
              <BriefcaseFill size={40} className="mb-3 text-primary" />
              <h4 className="fw-bold">For Job Seekers</h4>
              <ul className="small text-muted ps-3 mb-0 text-start">
                <li>Create your professional profile</li>
                <li>Browse and apply for jobs</li>
                <li>Track your applications</li>
              </ul>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="p-4 shadow card-hover">
              <PeopleFill size={40} className="mb-3 text-success" />
              <h4 className="fw-bold">For Employers</h4>
              <ul className="small text-muted ps-3 mb-0 text-start">
                <li>Post job openings</li>
                <li>Review applicants</li>
                <li>Find the perfect candidate</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <Container fluid className="cta-section text-center py-5">
        <h2 className="text-light mb-4">Ready to take the next step?</h2>
        <Button as={Link} to="/register" variant="light" size="lg" className="shadow">
          Join Us Today
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;

/* Hero Section Background Animation */
.hero-section {
  background: linear-gradient(135deg, #1e3c72, #2a5298, #4ca1af);
  background-size: 400% 400%;
  animation: gradientShift 12s ease infinite;
  padding: 100px 20px;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Fade Animations */
.animate-fade {
  opacity: 0;
  animation: fadeIn 2s forwards;
}
.animate-fade-delay {
  opacity: 0;
  animation: fadeIn 2s forwards 0.5s;
}
@keyframes fadeIn {
  to { opacity: 1; }
}

/* Carousel */
.carousel-img {
  height: 500px;
  object-fit: cover;
}

/* Card Hover */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
}


  /* --- HERO --- */
.hero-section {
  background: linear-gradient(135deg, #264653, #2a9d8f);
  background-size: 200% 200%;
  animation: gradientShift 14s ease infinite;
  padding: 100px 20px;
  border-radius: 0 0 36px 36px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-fade { opacity: 0; animation: fadeIn 1.2s forwards; }
.animate-fade-delay { opacity: 0; animation: fadeIn 1.2s 0.4s forwards; }
@keyframes fadeIn { to { opacity: 1; } }

/* --- CAROUSEL PANELS (no external images) --- */
.slide-panel {
  height: 460px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}
.slide-panel::after {
  content: "";
  position: absolute;
  inset: -20%;
  background:
    radial-gradient( circle at 25% 20%, rgba(255,255,255,0.18), transparent 40%),
    radial-gradient( circle at 75% 80%, rgba(255,255,255,0.12), transparent 35%);
  filter: blur(8px);
}
.slide1 {
  background: linear-gradient(120deg, #1d3557, #457b9d, #a8dadc);
  background-size: 200% 200%;
  animation: slideFlow 12s ease infinite;
}
.slide2 {
  background: linear-gradient(120deg, #e76f51, #f4a261, #e9c46a);
  background-size: 200% 200%;
  animation: slideFlow 12s ease infinite;
}
.slide3 {
  background: linear-gradient(120deg, #3a0ca3, #4361ee, #4cc9f0);
  background-size: 200% 200%;
  animation: slideFlow 12s ease infinite;
}
@keyframes slideFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.slide-overlay {
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.35);
  padding: 0 24px;
}
.animate-rise { animation: rise 0.8s ease both; }
@keyframes rise {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* --- CARDS --- */
.card-hover {
  border: none;
  border-radius: 14px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.12);
}

/* --- CTA --- */
.cta-section {
  background: linear-gradient(135deg, #0d6efd, #20c997);
}

/* Ensure page minimum height works with sticky footer layout */
.homepage { display: flex; flex-direction: column; }


import React from "react";
import { Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BriefcaseFill, PeopleFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section text-center text-light">
        <Container>
          <h1 className="fw-bold display-3 animate-fade">CareerLync</h1>
          <p className="lead mb-4 animate-fade-delay">
            Your gateway to <strong>dream jobs</strong> and <strong>top talent</strong>
          </p>
          <div className="d-flex justify-content-center flex-column flex-md-row">
            <Button
              as={Link}
              to="/register"
              variant="light"
              size="lg"
              className="w-100 mb-3 me-md-3 shadow"
            >
              Get Started
            </Button>
            <Button
              as={Link}
              to="/login"
              variant="outline-light"
              size="lg"
              className="w-100 mb-3 shadow"
            >
              Log In
            </Button>
          </div>
        </Container>
      </section>

      {/* Carousel Section (no external images) */}
      <Container className="py-5">
        <Carousel fade interval={4000} pause="hover">
          <Carousel.Item>
            <div className="slide-panel slide1 d-flex align-items-center justify-content-center text-center">
              <div className="slide-overlay animate-rise">
                <h3>Find Your Dream Job</h3>
                <p>Thousands of opportunities at your fingertips</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide-panel slide2 d-flex align-items-center justify-content-center text-center">
              <div className="slide-overlay animate-rise">
                <h3>Hire Top Talent</h3>
                <p>Connect with skilled professionals easily</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide-panel slide3 d-flex align-items-center justify-content-center text-center">
              <div className="slide-overlay animate-rise">
                <h3>Grow With Confidence</h3>
                <p>Insights, tools, and support at every step</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Who We Help */}
      <Container className="py-5">
        <Row className="text-center mb-4">
          <h2 className="fw-bold">Who We Help</h2>
          <p className="text-muted">We connect the right people to the right opportunities</p>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-4">
            <Card className="p-4 shadow card-hover">
              <BriefcaseFill size={40} className="mb-3 text-primary" />
              <h4 className="fw-bold">For Job Seekers</h4>
              <ul className="small text-muted ps-3 mb-0 text-start">
                <li>Create your professional profile</li>
                <li>Browse and apply for jobs</li>
                <li>Track your applications</li>
              </ul>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="p-4 shadow card-hover">
              <PeopleFill size={40} className="mb-3 text-success" />
              <h4 className="fw-bold">For Employers</h4>
              <ul className="small text-muted ps-3 mb-0 text-start">
                <li>Post job openings</li>
                <li>Review applicants</li>
                <li>Find the perfect candidate</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <Container fluid className="cta-section text-center py-5">
        <h2 className="text-light mb-4">Ready to take the next step?</h2>
        <Button as={Link} to="/register" variant="light" size="lg" className="shadow">
          Join Us Today
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
