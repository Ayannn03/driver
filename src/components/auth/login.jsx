import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const API_URL = 'https://main--lambent-cupcake-1da5a6.netlify.app/.netlify/functions/api/driver/';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}login-driver`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const textResponse = await response.text(); // Get the text response first
      console.log('Response text:', textResponse);

      if (!response.ok) {
        console.error('Login failed:', textResponse);
        return;
      }

      const data = JSON.parse(textResponse);
      navigate('/booking');
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div className='login'>
      <div className='loginForm'>
        <div className='loginHead'>
          <h1>Login</h1>
        </div>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
