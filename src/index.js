import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import * as serviceWorker from './serviceWorker'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaNAMo2lQFZ8K0DneraXDsOUYR69ogBxU",
  authDomain: "cart-852fa.firebaseapp.com",
  projectId: "cart-852fa",
  storageBucket: "cart-852fa.appspot.com",
  messagingSenderId: "236904965621",
  appId: "1:236904965621:web:569e4b040020ca34606cbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
