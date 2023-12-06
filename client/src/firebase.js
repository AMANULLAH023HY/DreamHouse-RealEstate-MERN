// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnhaBJRB92fMIKagTgVr7yrm26iNH7TwQ",
  authDomain: "mern-estate-663f4.firebaseapp.com",
  projectId: "mern-estate-663f4",
  storageBucket: "mern-estate-663f4.appspot.com",
  messagingSenderId: "481761886246",
  appId: "1:481761886246:web:6fda61fb52fa46150926e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);