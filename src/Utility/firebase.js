import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBIKQQY9k95olC8WqkHz7qLbqy2SR7hT8",
  authDomain: "clone-a1a97.firebaseapp.com",
  projectId: "clone-a1a97",
  storageBucket: "clone-a1a97.firebasestorage.app",
  messagingSenderId: "779086916446",
  appId: "1:779086916446:web:d2a686cc2521bcf0547dcf",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();