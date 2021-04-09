import React from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SigninPage = () => {
  return (
    <S.SignInPageContainer>
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
