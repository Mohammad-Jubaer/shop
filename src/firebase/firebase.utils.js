import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNR_Ubi3EwrtWCGr2KwrjMzrB4OjahObc",
  authDomain: "shop-db-7995d.firebaseapp.com",
  databaseURL: "https://shop-db-7995d.firebaseio.com",
  projectId: "shop-db-7995d",
  storageBucket: "shop-db-7995d.appspot.com",
  messagingSenderId: "502244843112",
  appId: "1:502244843112:web:f318ad61f22b91e63c65dd",
  measurementId: "G-6JCQ1QQJ3C"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,

        ...additionalData
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
