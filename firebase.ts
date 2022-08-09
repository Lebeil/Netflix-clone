// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "process.env.REACT_APP_FIREBASE_KEY",
    authDomain: "process.env.REACT_APP_FIREBASE_DOMAIN",
    projectId: "process.env.REACT_APP_PROJECT_ID",
    storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "process.env.REACT_APP_FIREBASE_SENDER_ID",
    appId: "process.env.REACT_APP_FIREBASE_APP_ID",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
