import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <Link href={linkUrl} passHref>
      <S.MenuItemContainer size={size}>
        <S.BackgroundImage
          className='menu-item__background-image'
          imageUrl={imageUrl}
        />
        <S.Content className='menu-item__content'>
          <S.Title>{title}</S.Title>
          <S.Subtitle>Shop now</S.Subtitle>
        </S.Content>
      </S.MenuItemContainer>
    </Link>
  );
};

export default MenuItem;

// Styled Components
const S = {};

const imageHoverStyles = css`
  transform: scale(1.1);
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

S.MenuItemContainer = styled.a`
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

    & .menu-item__background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .menu-item__content {
      opacity: 0.9;
    }
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
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
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
  opacity: 0.7;
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
