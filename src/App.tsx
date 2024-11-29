import React from 'react';
import logo from './logo.svg';
import './App.css';
import Linkly from './pages/Linkly';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Logout from './pages/auth/Logout';


function App() {
  return (
    <div className="">
      <Layout>
      {/* <Linkly/> */}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dashboard' element={<Linkly/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>
   
      </Layout>
      <ToastContainer/>
    </div>
  );
}

export default App;
