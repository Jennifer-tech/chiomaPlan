import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const fbConfig = {
  apiKey: "AIzaSyBNB5b8fHAfHapKYpOy94ePh6pGjn9Ie8w",
  authDomain: "chiomaplan.firebaseapp.com",
  projectId: "chiomaplan",
  storageBucket: "chiomaplan.appspot.com",
  messagingSenderId: "947925466704",
  appId: "1:947925466704:web:296f1b71383ef66d939b55"
};

// Use this to initialize the firebase App
firebase.initializeApp(fbConfig);

export default fbConfig;

export const auth = firebase.auth;
