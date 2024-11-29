import React from 'react';
import logo from './logo.svg';
import './App.css';
import Linkly from './pages/Linkly';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login';


function App() {
  return (
    <div className="">
      {/* <Linkly/> */}
      <Register />
      <Login/>
      <ToastContainer/>
    </div>
  );
}

export default App;
