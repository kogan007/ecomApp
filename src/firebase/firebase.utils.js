import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLeU5Npq5ky3FSQEdY1Zb1EjXWNCrMaFw",
    authDomain: "ecomapp-bd626.firebaseapp.com",
    projectId: "ecomapp-bd626",
    storageBucket: "ecomapp-bd626.appspot.com",
    messagingSenderId: "1022767099505",
    appId: "1:1022767099505:web:3c0d18d583136b9edfb5d0"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
