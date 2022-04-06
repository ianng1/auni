import '../App.css';
import { signInWithGoogle, getSignInInfo, signOutFirebase, stateChanger } from '../Firebase';
import React, { useState } from 'react';

function Signin() {

  const [user, setUser] = useState(null);

  const updateUser = () => {
    setUser({
      email: localStorage.getItem("email"), 
      name: localStorage.getItem("name"),
      profilePic: localStorage.getItem("profilePic")
    });
  }
  const signOut = () => {
    signOutFirebase();
    localStorage.clear();
    setUser(null);
  }

  return (
    <div>
      {
        user ?
          <div>
            <h1>Welcome to Auni, {localStorage.getItem("name")}</h1>
            <button onClick={signOut} className="sign-out">Sign out</button>
            <button onClick={() => { getSignInInfo() }} className="login-with-google-btn">Check Info!</button>
          </div>
          :
          <div>
            <h1>Welcome to Auni</h1>
          </div>
      }
    </div >
  );
}

export default Signin;