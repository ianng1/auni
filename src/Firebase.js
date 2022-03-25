// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsj2c7F0fxKZHi-H1bizSdSIkOaV0AjWk",
  authDomain: "auni-test.firebaseapp.com",
  projectId: "auni-test",
  storageBucket: "auni-test.appspot.com",
  messagingSenderId: "1088760474869",
  appId: "1:1088760474869:web:2fb743d41eca8f76a8a9bc",
  measurementId: "G-TL28S3CCF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
firebase.auth().useDeviceLanguage();


export const database = getDatabase(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, provider).then((result) => {

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

export const getSignInInfo = () => {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log("displayName: " + displayName);
    console.log("email: " + email);
    console.log("photoURL: " + photoURL);
    console.log("emailVerified: " + emailVerified);
    console.log("UID: " + uid);
  }
  else {
    console.log("Yee");
  }

}



export const signOutFirebase = async () => {
  auth.signOut();
}