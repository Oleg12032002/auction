import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBT1aWC4HIIyJTS9wmMzFeim6r-FjL--J0",
    authDomain: "auction-8e652.firebaseapp.com",
    projectId: "auction-8e652",
    storageBucket: "auction-8e652.appspot.com",
    messagingSenderId: "503012551602",
    appId: "1:503012551602:web:6f0ca3df7aafdaf03dd2ab",
    measurementId: "G-L9S9C95VBZ"
  }
);

export const Context = createContext(null);

const firestore = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    firestore
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

reportWebVitals();
