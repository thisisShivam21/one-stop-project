// import React, { useEffect, useState } from 'react'
// import { auth, provider} from '../config'
// import {signInWithPopup} from 'firebase/auth'
// import App from '../App'
// // import './Signup.css'

// function Signup() {

//     const [value, setValue] = useState('')
//     const handleClicked =() => {
//         signInWithPopup(auth, provider).then((data) => {
//             setValue(data.user.email)
//             localStorage.setItem('email', data.user.email)
//         })
//     }

//     useEffect(() => {
//         setValue(localStorage.getItem('email'))
//     })

//     return (
//         <div>
//             {value? <App /> : ''}
//             <button onClick={handleClicked}></button>
//         </div>
//     )
// }

// export default Signup


