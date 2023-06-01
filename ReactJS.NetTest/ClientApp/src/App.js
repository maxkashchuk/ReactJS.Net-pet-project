import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<Login />} path='/login'/>
        <Route element={<Register />} path='/register'/>
      </Routes>
    </div>
  );
}

export default App