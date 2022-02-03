import './App.css';
import { signInWithGoogle, signOutFirebase } from './Firebase';
import { useState } from 'react';

function App() {

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
    <div className="App">
      <header className="App-header">
        {
          user ?
            <div>
              <h1>Welcome to Auni, {localStorage.getItem("name")}</h1>
              <button onClick={signOut} class="sign-out">Sign out</button>
            </div>
            :
            <div>
              <h1>Welcome to Auni</h1>
              <button onClick={() => { (signInWithGoogle()).then(() => { console.log("hi!"); updateUser(); }) }} class="login-with-google-btn">Sign in with Google</button>
            </div>
        }
      </header>
    </div >
  );
}

export default App;