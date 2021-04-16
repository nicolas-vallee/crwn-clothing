import Head from 'next/head';
import styled from 'styled-components';
import Directory from '../components/Directory';

const HomePage = () => {
  return (
    <S.HomePageContainer>
      <Head>
        <title>CRWN Clothing</title>
      </Head>
      <Directory />
    </S.HomePageContainer>
  );
};

export default HomePage;

// Styled Components
const S = {};

S.HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
