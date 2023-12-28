// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG1lI4y_ab0YRbym6F2R3QGMTqvOo5di4",
  authDomain: "slate-academy-e9dfc.firebaseapp.com",
  projectId: "slate-academy-e9dfc",
  storageBucket: "slate-academy-e9dfc.appspot.com",
  messagingSenderId: "1026903621629",
  appId: "1:1026903621629:web:afa962f26560f200e4a394",
  measurementId: "G-ESEED3WPJ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);