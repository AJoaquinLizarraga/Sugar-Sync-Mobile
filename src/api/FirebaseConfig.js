// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytics";

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

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);
