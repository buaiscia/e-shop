import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDE0FDrruO8X7Gx5YSs-6T04T4jIzQ8G88",
    authDomain: "e-shop-49b05.firebaseapp.com",
    databaseURL: "https://e-shop-49b05.firebaseio.com",
    projectId: "e-shop-49b05",
    storageBucket: "e-shop-49b05.appspot.com",
    messagingSenderId: "614251995864",
    appId: "1:614251995864:web:9fa6a6d9a230e732d66dad"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;