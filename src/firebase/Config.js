// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbb3nW6e2fiYHdneY-9sBNev4zZruHhEQ",
  authDomain: "minibloggko.firebaseapp.com",
  projectId: "minibloggko",
  storageBucket: "minibloggko.appspot.com",
  messagingSenderId: "37451982941",
  appId: "1:37451982941:web:cdb7540532c0e0171185b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };