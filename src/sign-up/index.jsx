import React, { useState, useCallback } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.scss';
import { Input, FormField, Button } from '../components';
import useRequest from '../request';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  [ {response, error, isLoading }, execute] = useRequest('post', 'register')

  const handleFirstNameChange = useCallback((event) => {
    setFirstName(getValueFromEvent(event));
  }, []);
  const handleLastNameChange = useCallback((event) => {
    setLastName(getValueFromEvent(event));
  }, []);
  const handleEmailChange = useCallback((event) => {
    setEmail(getValueFromEvent(event));
  }, []);
  const handlePasswordChange = useCallback((event) => {
    setPassword(getValueFromEvent(event));
  }, []);

  const isFormValid = useCallback(() => {
    return firstName.length > 0 && 
    lastName.length > 0 &&
    email.length > 0 && 
    password.length > 0
  }, [firstName, lastName, email, password]);

  const handleSignUp = useCallback(() => {
    execute({ firstName, lastName, email, password });
  }, [firstName, lastName, email, password]);

  return (
    <div className="sign-up">
      <p className="card-header">Sign up</p>
      <FormField>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </FormField>
      <FormField>
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </FormField>
      <FormField>
        <Input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
      </FormField>
      <FormField>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormField>
      <p className="conditions">
        <span>By clicking Sign Up, you agree to our</span>
        <a href="#" className="link">Terms of use</a>
        <span>and</span>
        <a href="#" className="link">Privacy Policy</a>
      </p>
      <Button
        disabled={!isFormValid()}
        className="sign-up-button"
        onClick={handleSignUp}
      >
        SIGN UP
      </Button>
      <ToastContainer position="bottom-left" />
    </div>
  )
}

const getValueFromEvent = (event) => event.target ? event.target.value : undefined;

export default SignUp;
