import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from '../components/CustomButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = credentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.AuthFormContainer>
      <S.AuthFormTitle>I already have an account</S.AuthFormTitle>
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
        <S.AuthFormButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </S.AuthFormButtonsContainer>
      </form>
    </S.AuthFormContainer>
  );
};

export default SignIn;

// Styled Components
export const S = {};

S.AuthFormContainer = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

S.AuthFormTitle = styled.h2`
  margin: 10px 0;
`;

S.AuthFormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
