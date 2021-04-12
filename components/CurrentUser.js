import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/userSlice';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

const CurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return null;
};

export default CurrentUser;
