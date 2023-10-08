// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi5fHCsDq7IH_ABnTGmgKwrUyYsry3Vmk",
  authDomain: "the-wedding-canvas.firebaseapp.com",
  projectId: "the-wedding-canvas",
  storageBucket: "the-wedding-canvas.appspot.com",
  messagingSenderId: "33435028822",
  appId: "1:33435028822:web:57d21a0c8751e4ff95daf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
