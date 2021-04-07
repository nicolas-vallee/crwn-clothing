import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../assets/crown.svg';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </S.LogoContainer>
      <S.NavContainer>
        <S.NavItem>
          <Link href='/shop'>
            <a>Shop</a>
          </Link>
        </S.NavItem>
        <S.NavItem>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </S.NavItem>
      </S.NavContainer>
    </S.HeaderContainer>
  );
};

export default Header;

// Styled Components
const S = {};

S.HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

S.LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.NavContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

S.NavItem = styled.div`
  padding: 10px 15px;
  text-transform: uppercase;
`;
