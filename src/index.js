import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDzee1YbDf1Na9HeaF7kbHauKi-iIEG9dU",
  authDomain: "evernote-clone-5ba2c.firebaseapp.com",
  databaseURL: "https://evernote-clone-5ba2c.firebaseio.com",
  projectId: "evernote-clone-5ba2c",
  storageBucket: "evernote-clone-5ba2c.appspot.com",
  messagingSenderId: "757884544977",
  appId: "1:757884544977:web:31a62bd5231f1f1a"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
