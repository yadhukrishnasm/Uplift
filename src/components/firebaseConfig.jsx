// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAkorbhorPEEOl-BcxiT9JBj4ndEZH8Fo",
  authDomain: "uplift-c68e0.firebaseapp.com",
  projectId: "uplift-c68e0",
  storageBucket: "uplift-c68e0.appspot.com",
  messagingSenderId: "355486017990",
  appId: "1:355486017990:web:adde85cb9cb2c82a39eac7",
  measurementId: "G-5F73VKS671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};