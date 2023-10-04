// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPcEizuKW5ZPhezACRkO9B9WPvd1iNl4U",
  authDomain: "netflixgpt-18b13.firebaseapp.com",
  projectId: "netflixgpt-18b13",
  storageBucket: "netflixgpt-18b13.appspot.com",
  messagingSenderId: "367683936255",
  appId: "1:367683936255:web:238a90f0e0e5bb084091ca",
  measurementId: "G-MP3V52JQRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
