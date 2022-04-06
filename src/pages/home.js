import '../App.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout'
import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../Firebase";
import { AuthContext } from "../AuthProvider";
import { signOut } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { HiMenu } from 'react-icons/hi';
import ConfigIcon from '../configIcon';


export default function Home() {
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
      navigate("/login");
    }
  };

  const clickSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Layout>

        <h1> This is home</h1>
      </Layout>
    </div>
  );
}