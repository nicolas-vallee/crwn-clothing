import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { S as AuthFormStyledComponents } from './SignIn';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = credentials;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthFormStyledComponents.AuthFormContainer>
      <AuthFormStyledComponents.AuthFormTitle>
        I do not have an account
      </AuthFormStyledComponents.AuthFormTitle>
      <span>Register with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={credentials.displayName}
          required
          handleChange={handleChange}
          label='Name'
        />
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
        <FormInput
          name='confirmPassword'
          type='password'
          value={credentials.confirmPassword}
          required
          handleChange={handleChange}
          label='Confirm your password'
        />
        <AuthFormStyledComponents.AuthFormButtonsContainer>
          <CustomButton type='submit'>Create my account</CustomButton>
        </AuthFormStyledComponents.AuthFormButtonsContainer>
      </form>
    </AuthFormStyledComponents.AuthFormContainer>
  );
};

export default SignUp;

// Styled Components
