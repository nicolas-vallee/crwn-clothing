import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <S.ButtonContainer isGoogleSignIn={isGoogleSignIn} {...otherProps}>
      {children}
    </S.ButtonContainer>
  );
};

export default CustomButton;

// Styled Components
const S = {};

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

S.ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${({ isGoogleSignIn }) => isGoogleSignIn && googleSignInStyles}
`;
