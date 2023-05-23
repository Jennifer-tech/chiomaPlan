import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNB5b8fHAfHapKYpOy94ePh6pGjn9Ie8w",
  authDomain: "chiomaplan.firebaseapp.com",
  projectId: "chiomaplan",
  storageBucket: "chiomaplan.appspot.com",
  messagingSenderId: "947925466704",
  appId: "1:947925466704:web:296f1b71383ef66d939b55"
};

// Initialize Firebase
// firebase.initializeApp(fbConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig)
const db = getFirestore(app); 


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();

export { app, db, auth };