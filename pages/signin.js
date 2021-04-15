import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SigninPage = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const router = useRouter();

  // If a user is authenticated, redirect to home page
  if (currentUser) {
    // We make sure we are in the browser
    if (typeof window !== 'undefined') {
      router.push('/');
      return null;
    }
  }

  return (
    <S.SignInPageContainer>
      <Head>
        <title>CRWN Clothing | Sign In</title>
      </Head>
      <SignIn />
      <SignUp />
    </S.SignInPageContainer>
  );
};

export default SigninPage;

// Styled Components
const S = {};

S.SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;

  @media screen and (min-width: 800px) {
    max-width: 850px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 30px auto;
  }
`;
