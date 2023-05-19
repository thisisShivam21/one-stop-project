import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/contacthome/Contact';
import Footer from './components/footer/Footer';
import ServicesMain from './components/pages/services-main/ServicesMain';
import LoginPage from './components/pages/loginPage/LoginPage';
import SignUpPage from './components/pages/signUpPage/SignUpPage';
import Accomodation from './components/pages/accomodation/Accomodation';
import ServicesMap from './components/pages/servicesMap/ServicesMap';
import ServiceMaps from './components/pages/apiMap/ServiceMaps';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<ServicesMain />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/accomodation' element={<Accomodation />} />
        <Route path='/servicesMap' element={<ServicesMap />} />
        {/* <Route path='/serviceMaps' element={<ServiceMaps />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
