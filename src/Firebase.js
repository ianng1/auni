/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getDatabase(app);

export function initialize() {
  // Initialize Firebase
  initializeApp(firebaseConfig);
}

export function attachAuthListener(handler) {
  return auth.onAuthStateChanged(user => {
    handler(user);
  });
}
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider).then((result) => {

    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
    const isNew = result.additionalUserInfo.isNewUser;
    console.log("Is New? " + isNew);
  }).catch((error) => {
    console.log("Error: " + error);
  });
}

export async function createNewUser(auth, email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(auth, email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutUser() {
  await signOut();
}

export const signOutFirebase = async () => {
  auth.signOut();
}
*/

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsj2c7F0fxKZHi-H1bizSdSIkOaV0AjWk",
  authDomain: "auni-test.firebaseapp.com",
  projectId: "auni-test",
  storageBucket: "auni-test.appspot.com",
  messagingSenderId: "1088760474869",
  appId: "1:1088760474869:web:2fb743d41eca8f76a8a9bc",
  measurementId: "G-TL28S3CCF0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);

export default app;