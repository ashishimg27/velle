// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxNmypd0QsGvj4pRAq_OPx-zjvCaVBvEo",
  authDomain: "velle-4871b.firebaseapp.com",
  projectId: "velle-4871b",
  storageBucket: "velle-4871b.appspot.com",
  messagingSenderId: "694770493921",
  appId: "1:694770493921:web:447b0090b1436e82e04aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}