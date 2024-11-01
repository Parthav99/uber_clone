// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "", // add locally
  authDomain: "uber-next-clone-177d0.firebaseapp.com",
  projectId: "uber-next-clone-177d0",
  storageBucket: "uber-next-clone-177d0.appspot.com",
  messagingSenderId: "973613937152",
  appId: "1:973613937152:web:28650ffa1535089ce71ee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}
