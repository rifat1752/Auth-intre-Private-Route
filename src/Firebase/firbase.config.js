// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWzHFeovnmQCEGKSfSOo_hXWh9Uuu9HeQ",
  authDomain: "auth-intre-private-route.firebaseapp.com",
  projectId: "auth-intre-private-route",
  storageBucket: "auth-intre-private-route.appspot.com",
  messagingSenderId: "929741942585",
  appId: "1:929741942585:web:f441c0988d500fb9c282e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// const auth = getAuth(app);
// export default auth;