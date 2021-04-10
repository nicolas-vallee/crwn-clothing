import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CurrentUser from '../components/CurrentUser';
import GlobalStyle from '../styles/globalStyles';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CurrentUser />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
