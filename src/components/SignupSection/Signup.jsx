// Signup.js

import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Your signup logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // You can add your signup logic here
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="signup">
            <div className="signup__field">
              <i className="signup__icon fas fa-user"></i>
              <input type="text" className="signup__input" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-user"></i>
              <input type="text" className="signup__input" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-envelope"></i>
              <input type="email" className="signup__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-lock"></i>
              <input type="password" className="signup__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="signup__field">
              <i className="signup__icon fas fa-lock"></i>
              <input type="password" className="signup__input" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button className="button signup__submit" onClick={handleSignup}>
              <span className="button__text">Sign Up Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>				
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>		
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>		
      </div>
    </div>
  );
};

export default Signup;
