import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0fVmXwc7Um0EG212B9xtLlJUqePiAsEc",
    authDomain: "vapebros-751d4.firebaseapp.com",
    projectId: "vapebros-751d4",
    storageBucket: "vapebros-751d4.appspot.com",
    messagingSenderId: "642099070810",
    appId: "1:642099070810:web:ffdbb43c60630b05e09563",
    measurementId: "G-R5NEHMLGQT"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth()
// const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () => signInWithRedirect(auth, provider);
export const db = getFirestore(app);
export const storage = getStorage(app);
// auth.languageCode = 'it'
// auth.useDeviceLanguage();