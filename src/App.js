import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
// import Login from './components/pages/login/Login';
// import SignUp from './components/pages/signUp/SignUp';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/contacthome/Contact';
// import ServicesHome from './components/services/ServicesHome';
import Footer from './components/footer/Footer';
import ServicesMain from './components/pages/services-main/ServicesMain';
// import AuthProvider from './contexts/AuthContext';
import LoginPage from './components/pages/loginPage/LoginPage';
import SignUpPage from './components/pages/signUpPage/SignUpPage';
// import SignUpPage from './components/pages/signUpPage/SignUpPage';



function App() {
  return (
    // <AuthProvider>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        {/* <About /> */}
        {/* <ServicesMain /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<ServicesMain />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
        {/* <LoginPage /> */}
        <Footer />
      </div>
    // </AuthProvider>
  );
}

export default App;
