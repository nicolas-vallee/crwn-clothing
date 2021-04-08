import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({ email: '', password: '' });
  };

  return (
    <S.SignInContainer>
      <S.SignInTitle>I already have an account</S.SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={credentials.email}
          required
          handleChange={handleChange}
          label='Email'
        />
        <FormInput
          name='password'
          type='password'
          value={credentials.password}
          required
          handleChange={handleChange}
          label='Password'
        />
        <input type='submit' value='Sign In' />
      </form>
    </S.SignInContainer>
  );
};

export default SignIn;

// Styled Components
const S = {};

S.SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

S.SignInTitle = styled.h2`
  margin: 10px 0;
`;
