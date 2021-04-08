import React from 'react';
import styled, { css } from 'styled-components';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <S.InputGroup>
      <S.FormInput onChange={handleChange} {...otherProps} />
      {label && (
        <S.FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
          {label}
        </S.FormInputLabel>
      )}
    </S.InputGroup>
  );
};

export default FormInput;

// Styled Components
const S = {};

const mainColor = 'black';
const subColor = 'grey';
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

S.InputGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

S.FormInput = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

S.FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
