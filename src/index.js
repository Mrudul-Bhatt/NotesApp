import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB66PM1uVkvtSG29biYja4ju8R2OGnRaLM",
  authDomain: "evernote-clone-79c4a.firebaseapp.com",
  databaseURL: "https://evernote-clone-79c4a.firebaseio.com",
  projectId: "evernote-clone-79c4a",
  storageBucket: "evernote-clone-79c4a.appspot.com",
  messagingSenderId: "1002699384514",
  appId: "1:1002699384514:web:9442135dbe3105b17cbd5b",
  measurementId: "G-QF1HVQS1K3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("evernote-container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
