// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb-19aZBL9NFYLCdOsrTxWyxPVBLWb-TM",
    authDomain: "netflixclone-6c650.firebaseapp.com",
    projectId: "netflixclone-6c650",
    storageBucket: "netflixclone-6c650.appspot.com",
    messagingSenderId: "1019561476423",
    appId: "1:1019561476423:web:5a83dcbf4e0385442d4c62"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
