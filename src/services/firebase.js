import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "disney-plus-clone-481e7.firebaseapp.com",
    projectId: "disney-plus-clone-481e7",
    storageBucket: "disney-plus-clone-481e7.appspot.com",
    messagingSenderId: "953760587421",
    appId: "1:953760587421:web:e904c7bb356a7eeb2d7e74",
    measurementId: "G-QKKYQQ4PYG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
