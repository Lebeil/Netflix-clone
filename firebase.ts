// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: "netflixclone-2614f.firebaseapp.com",
    projectId: "netflixclone-2614f",
    storageBucket: "netflixclone-2614f.appspot.com",
    messagingSenderId: "140487358482",
    appId: "1:140487358482:web:60c08ecf1f21593e4f40cb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
