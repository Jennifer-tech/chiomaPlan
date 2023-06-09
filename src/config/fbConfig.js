import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
require('dotenv').config()

const fbConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Use this to initialize the firebase App
firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default fbConfig;
// export default firebase;
export const auth = firebase.auth;
