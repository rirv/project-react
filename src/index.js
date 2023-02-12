import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaKIJLgpCziVfidGUcM-6vrDeymZunMA0",
  authDomain: "react-rideout.firebaseapp.com",
  projectId: "react-rideout",
  storageBucket: "react-rideout.appspot.com",
  messagingSenderId: "634923032069",
  appId: "1:634923032069:web:2734fdebf15072ae49466c",
  measurementId: "G-FG7PQKYZ1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);


