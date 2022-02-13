// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdJ8abQL4Lk9l6AS3y_vBiLmF8bcd9oAw",
  authDomain: "auni-7e9b1.firebaseapp.com",
  projectId: "auni-7e9b1",
  storageBucket: "auni-7e9b1.appspot.com",
  messagingSenderId: "327916126155",
  appId: "1:327916126155:web:9f4e59af2c9ad33835c04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider).then((result) => {

    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);

  }).catch((error) => {
    console.log(error);
  });
}

export const signOutFirebase = async () => {
  auth.signOut();
}