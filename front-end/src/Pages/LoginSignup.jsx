import React from 'react'
import './CSS/Loginsignup.css'
const LoginSignup=()=> {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fiels">
          <input type="text"placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have an account? <span>Login Here</span>
        </p>
        <div className="loginsignuo-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, iagree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
