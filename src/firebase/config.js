// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTaMACgpNV6xYokIPRbkin9gz1wOPzows",
  authDomain: "react-app-2bc12.firebaseapp.com",
  projectId: "react-app-2bc12",
  storageBucket: "react-app-2bc12.appspot.com",
  messagingSenderId: "768430589434",
  appId: "1:768430589434:web:b39b669668117dd900d043"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );