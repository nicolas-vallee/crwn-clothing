import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/globalStyles';
import Header from '../components/Header';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(null);
      }
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
