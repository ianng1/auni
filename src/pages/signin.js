import '../App.css';
import { auth } from '../Firebase';
import LoaderButton from "../components/LoaderButton";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Layout from '../components/Layout';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  function validateForm() {
    return (
      email.length > 5 &&
      password.length > 5
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/");
    }
    onRegister();
  };

  return (
    <>
      <Layout>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId=" email" size="lg">
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
          <LoaderButton
              block
              size="lg"
              type="submit"
              variant="success"
              isLoading={isLoading}
              disabled={!validateForm()}
            >
              Sign in
            </LoaderButton>
        </Form>
      </Layout>
    </>
  )
}