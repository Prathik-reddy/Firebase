// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1SibLyMLiS-2cp_YzWWX0Ypabx7zYiOs",
  authDomain: "prathik-firebase1.firebaseapp.com",
  projectId: "prathik-firebase1",
  storageBucket: "prathik-firebase1.appspot.com",
  messagingSenderId: "158349976399",
  appId: "1:158349976399:web:ce4fd9012ed63874f3db3a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users')
}