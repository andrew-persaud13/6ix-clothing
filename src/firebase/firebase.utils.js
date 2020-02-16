import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD6faYLS6vaQ3RSAXGE-5UyrC5Od1poutY',
  authDomain: 'ix-db-7b9d0.firebaseapp.com',
  databaseURL: 'https://ix-db-7b9d0.firebaseio.com',
  projectId: 'ix-db-7b9d0',
  storageBucket: 'ix-db-7b9d0.appspot.com',
  messagingSenderId: '981133547509',
  appId: '1:981133547509:web:39575534805b1d43b5f2bc'
};

firebase.initializeApp(config);

export const auth = firebase.auth(); //auth is an instance of authentication
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //get a google auth instance
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
