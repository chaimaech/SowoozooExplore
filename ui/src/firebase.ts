// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEbFqm_Acg5dpPLCqbD8bjkjE4NE08ako",
    authDomain: "sowoozoo-cb2de.firebaseapp.com",
    projectId: "sowoozoo-cb2de",
    storageBucket: "sowoozoo-cb2de.appspot.com",
    messagingSenderId: "748339960081",
    appId: "1:748339960081:web:93271460a4ad1bd29c94b0",
    measurementId: "G-ET45XE8LVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);