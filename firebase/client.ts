// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt1no6xYyQHbbXuy86UI5dRMhoZoVIfoM",
  authDomain: "intervuai-1c4ab.firebaseapp.com",
  projectId: "intervuai-1c4ab",
  storageBucket: "intervuai-1c4ab.firebasestorage.app",
  messagingSenderId: "401985604572",
  appId: "1:401985604572:web:7b4916cbe6185874959d19",
  measurementId: "G-G42GPPB74Z"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


