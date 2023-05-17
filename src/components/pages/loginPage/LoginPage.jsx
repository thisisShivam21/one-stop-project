import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import "./loginpage.css"
const provider = new GoogleAuthProvider();


const LoginPage = () => {
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                window.location.href = '/'
            }).catch((error) => {
                console.log(error);
                alert("User creds mismatch")
            })
    }

    const loginWithGoogle = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                window.location.href = '/'
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }


    return (
        <div className='page login'>
            <form onSubmit={login} action="#" className="login-form">
                <h2 className='login-title'>Login</h2>
                <div className="login-fields">
                    <div className="name-container">
                        <label htmlFor="/" className="field-name">Email</label>
                    </div>
                    <div className="input-container">
                        <input type="email" className="input-field" placeholder='Enter your Email...' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="login-fields">
                    <div className="name-container">
                        <label htmlFor="/" className="field-name">Password</label>
                    </div>
                    <div className="input-container">
                        <input type="password" className="input-field" placeholder='Enter your Username...' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="btn-container">
                    <button type='submit' className='submit-btn'>Login</button>
                </div>
                <div className="btn-container">
                    <button onClick={loginWithGoogle} className='submit-btn'>Login With Google</button>
                </div>
            </form>
            <button className='signup-btn'><Link to="/signup">Sign Up</Link></button>
        </div>
    )
}

export default LoginPage