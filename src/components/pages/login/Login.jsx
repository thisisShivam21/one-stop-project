import React from 'react'
// import { Link } from "react-router-dom"
import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className="login-container">
        <div className="login-heading">
          <span className="loginTitle">Login</span>
        </div>
        <div className="login-form-container">
          <form className="loginForm">
            <label>Email</label>
            <input type="email" className='loginInput' placeholder='Enter your Email...' />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your Password...' />
            <button className='loginButton'>
              Sign In
            </button>
          </form>
        </div>
      </div>
      {/* <button className='loginRegisterButton'>
        Sign Up
      </button> */}
    </div>
  )
}