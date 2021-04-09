import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAhNn5H07vYDKzZzKXYJh79ktj3jyir90o',
  authDomain: 'crwn-clothing-111e2.firebaseapp.com',
  projectId: 'crwn-clothing-111e2',
  storageBucket: 'crwn-clothing-111e2.appspot.com',
  messagingSenderId: '606751938137',
  appId: '1:606751938137:web:538534d146cf9cdec30348',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
