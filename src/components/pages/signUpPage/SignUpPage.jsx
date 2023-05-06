import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import "./signuppage.css"

const SignUpPage = () => {
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='page signUp'>
            <form onSubmit={signup} action="#" className="signup-form">
                <h2 className='signup-title'>Sign Up</h2>
                {/* <div className="signup-fields">
                    <label htmlFor="/" className="field-name">Username</label>
                    <input type="text" className="input-field" placeholder='Enter your Username...' required value={username} onChange={(e) => setUsername(e.target.value)} />
                </div> */}
                <div className="signup-fields">
                    <div className="name-container">
                            <label htmlFor="/" className="field-name">Email</label>
                        </div>
                        <div className="input-container">
                            <input type="email" className="input-field" placeholder='Enter your Email...' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                </div>
                <div className="signup-fields">
                    <div className="name-container">
                        <label htmlFor="/" className="field-name">Password</label>
                    </div>
                    <div className="input-container">
                        <input type="password" className="input-field" placeholder='Enter your Username...' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="btn-container">               
                    <button type='submit' className='submit-btn'><Link to="/login">Sign Up</Link></button>
                </div>
            </form>
        </div>
    )
}

export default SignUpPage


// export default function SignUpPage() {
//   return (
//     <div className='signUp'>
//         <h2 className='signup-title'>Sign Up</h2>
//         <form action="#" className="signup-form">
//             <div className="signup-fields">
//                 <label htmlFor="/" className="field-name">Username</label>
//                 <input type="text" className="input-field" placeholder='Enter your Username...' required/>
//             </div>
//             <div className="signup-fields">
//                 <label htmlFor="/" className="field-name">Email</label>
//                 <input type="email" className="input-field" placeholder='Enter your Email...' required/>
//             </div>
//             <div className="signup-fields">
//                 <label htmlFor="/" className="field-name">Password</label>
//                 <input type="password" className="input-field" placeholder='Enter your Username...' required/>
//             </div>
//             <button className='submit-btn'>Sign Up</button>
//         </form>
//     </div>
//   )
// }

