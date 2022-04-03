import '../App.css';
import { signInWithGoogle, getSignInInfo, signOutFirebase, stateChanger } from '../Firebase';
import LoaderButton from "../components/LoaderButton";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      email.length > 5 &&
      password.length > 5 &&
      password === confirmPassword
    );
  }

  async function handleSubmit(event) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
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
  )
}