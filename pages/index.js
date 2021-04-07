import Head from 'next/head';
import styled from 'styled-components';
import Directory from '../components/Directory';

const Home = () => {
  return (
    <S.HomePageContainer>
      <Head>
        <title>CRWN Clothing</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Directory />
    </S.HomePageContainer>
  );
};

export default Home;

// Styled Components
const S = {};

S.HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
