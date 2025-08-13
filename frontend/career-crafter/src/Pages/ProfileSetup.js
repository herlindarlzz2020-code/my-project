// src/Pages/ProfileSetup.js
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

const ProfileSetup = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    companyName: "",
    website: "",
    qualification: "",
    skills: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const checkProfileExists = async () => {
      try {
        const endpoint =
          auth.role === "employer"
            ? `https://localhost:7008/api/Employers/user/${auth.userId}`
            : `https://localhost:7008/api/JobSeekers/user/${auth.userId}`;

        const res = await axios.get(endpoint, {
          headers: { Authorization: `Bearer ${auth.token}` }
        });

        if (res?.data) {
          navigate(auth.role === "employer" ? "/employer/dashboard" : "/jobseeker/dashboard");
        }
      } catch (err) {
        console.log("Profile not found, please complete setup");
      } finally {
        setLoading(false);
      }
    };

    checkProfileExists();
  }, [auth, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmployerSubmit = async (e) => {
    e.preventDefault();
    const employerData = {
      userId: auth.userId,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      companyName: form.companyName,
      website: form.website
    };

    try {
      await axios.post("https://localhost:7008/api/Employers", employerData, {
        headers: { Authorization: `Bearer ${auth.token}` }
      });
      navigate("/employer/dashboard");
    } catch (err) {
      alert("Employer profile creation failed");
      console.error(err);
    }
  };

  const handleJobSeekerSubmit = async (e) => {
    e.preventDefault();
    const jobSeekerData = {
      userId: auth.userId,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      qualification: form.qualification,
      skills: form.skills
    };

    try {
      await axios.post("https://localhost:7008/api/JobSeekers", jobSeekerData, {
        headers: { Authorization: `Bearer ${auth.token}` }
      });
      navigate("/jobseeker/dashboard");
    } catch (err) {
      alert("JobSeeker profile creation failed");
      console.error(err);
    }
  };

  if (!auth) return <Alert variant="danger" className="text-center mt-5">Please login first</Alert>;
  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="w-100 p-4" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4 text-center">Complete Your Profile ({auth.role})</h2>

        {auth.role === "employer" && (
          <Form onSubmit={handleEmployerSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" value={form.firstName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" value={form.lastName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" value={form.phone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control name="companyName" value={form.companyName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control name="website" value={form.website} onChange={handleChange} />
            </Form.Group>
            <Button type="submit" variant="primary">Create Employer Profile</Button>
          </Form>
        )}
        {auth.role === "jobseeker" && (
          <Form onSubmit={handleJobSeekerSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" value={form.firstName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" value={form.lastName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" value={form.phone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Qualification</Form.Label>
              <Form.Control name="qualification" value={form.qualification} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control name="skills" value={form.skills} onChange={handleChange} required />
            </Form.Group>
            <Button type="submit" variant="success">Create JobSeeker Profile</Button>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default ProfileSetup;