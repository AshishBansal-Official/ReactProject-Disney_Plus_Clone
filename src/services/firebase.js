import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB72ZCrdTs2KR6gh2D066or_Gc6BtFxbI8",
    authDomain: "disney-plus-clone-481e7.firebaseapp.com",
    projectId: "disney-plus-clone-481e7",
    storageBucket: "disney-plus-clone-481e7.appspot.com",
    messagingSenderId: "953760587421",
    appId: "1:953760587421:web:e904c7bb356a7eeb2d7e74",
    measurementId: "G-QKKYQQ4PYG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, provider, storage}
export default db;

// function googleSignInPopup(provider) {
//     // [START auth_google_signin_popup]
//     const { getAuth, signInWithPopup, GoogleAuthProvider } = require("firebase/auth");
    
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//     // [END auth_google_signin_popup]
//   }