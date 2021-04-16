import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Logo from '../assets/crown.svg';
import { auth } from '../firebase/firebase.utils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartHidden = useSelector((state) => state.cart.cartHidden);

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
        <S.NavItem>
          {currentUser ? (
            <div onClick={() => auth.signOut()}>Sign out</div>
          ) : (
            <Link href='/signin'>
              <a>Sign in</a>
            </Link>
          )}
        </S.NavItem>
        <CartIcon />
      </S.NavContainer>
      {!cartHidden && <CartDropdown />}
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

S.NavItem = styled.div`
  padding: 10px 15px;
  text-transform: uppercase;

  & div:hover {
    cursor: pointer;
  }
`;
