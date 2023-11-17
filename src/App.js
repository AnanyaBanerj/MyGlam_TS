import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';



import Home from './pages/home';
import Lipstick1 from './pages/lipstick1';
import Lipstick2 from './pages/lipstick2';
import Lipstick3 from './pages/lipstick3';
import Lipstick4 from './pages/lipstick4';
import Lipstick5 from './pages/lipstick5';
import Lipstick6 from './pages/lipstick6';
import Cheek1 from './pages/cheek1';
import Cheek2 from './pages/cheek2';
import Cheek3 from './pages/cheek3';
import Cheek4 from './pages/cheek4';
import Cheek5 from './pages/cheek5';
import Cheek6 from './pages/cheek6';
import Eye1 from './pages/eye1';
import Eye2 from './pages/eye2';
import Eye3 from './pages/eye3';
import Login from './pages/login';
import Register from './pages/register';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lipstick1" element={<Lipstick1 />} />
        <Route path="/lipstick2" element={<Lipstick2 />} />
        <Route path="/lipstick3" element={<Lipstick3 />} />
        <Route path="/lipstick4" element={<Lipstick4 />} />
        <Route path="/lipstick5" element={<Lipstick5 />} />
        <Route path="/lipstick6" element={<Lipstick6 />} />
        <Route path="/cheek1" element={<Cheek1 />} />
        <Route path="/cheek2" element={<Cheek2 />} />
        <Route path="/cheek3" element={<Cheek3 />} />
        <Route path="/cheek4" element={<Cheek4 />} />
        <Route path="/cheek5" element={<Cheek5 />} />
        <Route path="/cheek6" element={<Cheek6 />} />
        <Route path="/eye1" element={<Eye1 />} />
        <Route path="/eye2" element={<Eye2 />} />
        <Route path="/eye3" element={<Eye3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

      </Routes>
    </BrowserRouter>
    

    

  );
}

export default App;


