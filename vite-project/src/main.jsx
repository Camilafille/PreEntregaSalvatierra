import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAQFF4yHgcMYkq17AhhyWisef3qokNkxTA",
  authDomain: "posavaso-bfbb3.firebaseapp.com",
  projectId: "posavaso-bfbb3",
  storageBucket: "posavaso-bfbb3.appspot.com",
  messagingSenderId: "857314531366",
  appId: "1:857314531366:web:23dffca7a685005e1b2ee7",
  measurementId: "G-9WCDYSFWCW"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
