import './App.css';
import { signInWithGoogle } from './Firebase';
//import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={signInWithGoogle} class="login-with-google-btn">Sign in with Google</button>
      <h1>Welcome to Auni, {localStorage.getItem("name")}</h1>
      </header>
    </div>
  );
}

export default App;