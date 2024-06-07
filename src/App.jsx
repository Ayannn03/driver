import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Splash from './components/auth/splash';
import Enrollment from './components/auth/enrollment';
import Booking from './components/dashboard/booking';
import Message from './components/message/message';
import Profile from './components/profile/profile';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login-driver" element={<Login />} />
        <Route path="/signup-driver" element={<Signup />} />
        <Route path="/enroll-vehicle" element={<Enrollment />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </Router>
  );
};

export default App;
