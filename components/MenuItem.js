import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const MenuItem = ({ title, imageUrl, size }) => {
  const [hover, setHover] = useState(false);

  return (
    <S.MenuItemContainer
      size={size}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <S.BackgroundImage
        hover={hover}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <S.Content hover={hover}>
        <S.Title>{title}</S.Title>
        <S.Subtitle>Shop now</S.Subtitle>
      </S.Content>
    </S.MenuItemContainer>
  );
};

export default MenuItem;

// Styled Components
const S = {};

const imageHoverStyles = css`
  transform: scale(1.1);
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

S.MenuItemContainer = styled.div`
  min-width: 50%;
  height: 180px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (min-width: 800px) {
    min-width: 30%;
    height: ${({ size }) => (size === 'large' ? '380px' : '240px')};
  }
`;

S.BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  ${({ hover }) => hover && imageHoverStyles}
`;

S.Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: ${({ hover }) => (hover ? 0.9 : 0.7)};
  position: absolute;
`;

S.Title = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

S.Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
