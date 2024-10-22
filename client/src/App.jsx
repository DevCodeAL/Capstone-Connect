import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SignUp from './components/Sign-up';
import Login from './components/Log-in';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ForgotPass from './components/Forgot-Password';
import CreateNewPass from './components/Create-new-password';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-pass' element={<ForgotPass/>}/>
          <Route path='/create-new-pass' element={<CreateNewPass/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App;
