import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import CurrentUser from '../components/CurrentUser';
import GlobalStyle from '../styles/globalStyles';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CurrentUser />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
