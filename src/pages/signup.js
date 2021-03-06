import '../App.css';
import { auth, db } from '../Firebase';
import { ref, set } from "firebase/database";
import LoaderButton from "../components/LoaderButton";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Layout from '../components/Layout'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function validateForm() {
    return (
      email.length > 5 &&
      password.length > 5 &&
      password === confirmPassword
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            email: email,
          });
        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
  }

  return (
    <>
      <Layout>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" size="lg">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" size="lg">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword" size="lg">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <LoaderButton
              block
              size="lg"
              type="submit"
              variant="success"
              isLoading={isLoading}
              disabled={!validateForm()}
            >
              Signup
            </LoaderButton>
        </Form>
      </Layout>
    </>
  )
}