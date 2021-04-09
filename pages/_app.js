import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/globalStyles';
import Header from '../components/Header';

import { auth } from '../firebase/firebase.utils';

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
