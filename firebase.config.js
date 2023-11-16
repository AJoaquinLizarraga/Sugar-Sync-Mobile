/** @format */

// Import the functions you need from the SDKs you need
// import { applicationDefault, cert } from "firebase-admin/app"
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDcfCDd4RWQm7hhNuhd8_WSqX_SX-c_XY0',
  authDomain: 'sugar-sync-ea81d.firebaseapp.com',
  projectId: 'sugar-sync-ea81d',
  storageBucket: 'sugar-sync-ea81d.appspot.com',
  messagingSenderId: '797764504841',
  appId: '1:797764504841:web:0cddb5ff930df971d057d8',
  measurementId: 'G-VG6WN14WXM',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const auth = getAuth(app);
export {app, auth, db};

// const analytics = getAnalytics(app)
