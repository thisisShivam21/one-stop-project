import React, { useRef, useState, Alert } from 'react'
// import { Link } from "react-router-dom"
import './signup.css'
import { useAuth } from '../../../contexts/AuthContext'

export default function SignUp() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }
    return (
        <div onSubmit={handleSubmit} className='register'>
            <span className="registerTitle">Sign Up</span>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className='registerInput' ref={usernameRef} placeholder='Enter your Username...' required/>
                <label>Email</label>
                <input type="email" className='registerInput' ref={emailRef} placeholder='Enter your Email...' required/>
                <label>Password</label>
                <input type="password" className='registerInput' ref={passwordRef} placeholder='Enter your Password...' required/>
                <label>Confirm Password</label>
                <input type="password" className='registerInput' ref={passwordConfirmRef} placeholder='Enter your Password...' required/>
                <button disabled={loading} className='registerButton'>
                    Sign Up
                </button>
            </form>
            {/* <button className='registerLoginButton'>
            <Link className='link' to="/login">Login</Link>
            </button> */}
        </div>
    )
}
