import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({ email: '', password: '' });
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name='email'
            type='email'
            value={credentials.email}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            name='password'
            type='password'
            value={credentials.password}
            required
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='Sign In' />
      </form>
    </div>
  );
};

export default SignIn;

// Styled Components
const S = {};
