import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = ({
  children,
  isInverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <S.ButtonContainer
      isInverted={isInverted}
      isGoogleSignIn={isGoogleSignIn}
      {...otherProps}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default CustomButton;

// Styled Components
const S = {};

const regularButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.isInverted ? invertedButtonStyles : regularButtonStyles;
};

S.ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  max-width: 45%;
  min-height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}
`;
