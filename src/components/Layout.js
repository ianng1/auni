import '../App.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../Firebase";
import { AuthContext } from "../AuthProvider";
import { signOut } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { HiMenu } from 'react-icons/hi';
import ConfigIcon from '../configIcon';


const Layout= ({children}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/signin");
    }
  };

  const clickSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="Header">
        <Button onClick={() => { setShowMenu(!showMenu); console.log(showMenu); }}
          variant="link">
          <ConfigIcon><HiMenu /></ConfigIcon>
        </Button>
        <h1 style={{ margin: 27, marginLeft: 548, marginRight: 780, fontSize: 36 }}>Auni</h1>
        <div style={{ marginLeft: 5, width: 30 }}>
          <div class="btn-group">
            <Button onClick={clickSignup} style={{ margin: 1, width: 90}} class="btn btn-outline-dark">
            {currentUser ? "Profile" : "Sign up"}
            </Button>
            <Button onClick={clickLogin} style={{ margin: 1, width: 90}} class="btn btn-outline-dark">
              {currentUser ? "Log out" : "Login"}
            </Button>
          </div>
        </div>
      </div>
      {children}
      <div className="App" style={{ display: 'flex', height: '100vh' }}>
        {showMenu ? <><Navbar /></> : null}
      </div>
    </div>
  );
}

export default Layout;