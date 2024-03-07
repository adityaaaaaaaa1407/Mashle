import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from '@shadcn/ui'; // Replace with Shadan components

const SignupPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // Implement signup logic with Appwrite (replace placeholder)
    console.log('Signup with email:', email, password);
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" label="Username" placeholder="Your username" />
        <Input type="email" label="Email" placeholder
