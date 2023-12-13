import React from 'react'
import './CSS/loginSignup.css';

const LoginSingup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='enter your name'></input>
          <input type='email' placeholder='enter your email'></input>
          <input type='password' placeholder='enter your password'></input>
        </div>
        <button type='button'>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span> &nbsp;Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' ></input>
          <p>By continuing, I agree the terms od use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup;
