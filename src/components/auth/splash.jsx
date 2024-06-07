import React from 'react'
import { useNavigate } from 'react-router-dom';
import './splash.css';

const splash = () => {
const navigate = useNavigate();

const handleNavigateToLogin = () => {
navigate('/login-driver');
};
  
const handleNavigateToSignup = () => {
navigate('/signup-driver');
};
  
return (
<div className='splash'>
<div className='splash-content'>
    <h1>Hatid Driver</h1>
    <div className='splash-buttons'>
    <button onClick={handleNavigateToLogin}>
        Login
    </button>
    <button onClick={handleNavigateToSignup}>
    Sign Up
    </button>
    </div>
    </div>
</div>
);
};

export default splash;