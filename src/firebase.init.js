// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyBC2pz7YXUmWvK-OOCeVxxtHK_7W5y3YVs",
    authDomain: "shutter-art-miles-10-assign.firebaseapp.com",
    projectId: "shutter-art-miles-10-assign",
    storageBucket: "shutter-art-miles-10-assign.appspot.com",
    messagingSenderId: "704204807500",
    appId: "1:704204807500:web:606ea87e929aca5bc083e9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;