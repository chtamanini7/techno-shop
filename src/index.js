import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgbS_WB48wNRhlk2yFH8ghr10b3OeLubo",
  authDomain: "technoshop-9c794.firebaseapp.com",
  projectId: "technoshop-9c794",
  storageBucket: "technoshop-9c794.appspot.com",
  messagingSenderId: "652650438465",
  appId: "1:652650438465:web:056f8b3d7ccf186b91cbc0",
  measurementId: "G-4GKEWGVLW4"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
