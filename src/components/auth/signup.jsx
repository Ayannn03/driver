import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const API_URL = 'https://main--lambent-cupcake-1da5a6.netlify.app/.netlify/functions/api/driver/signup-driver';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    fullname: '',
    municipality: '',
    barangay: '',
    street: '',
    number: '',
    birthday: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('username', data.username);
        navigate('/enroll-vehicle');
      } else {
        const errorText = await response.text();
        console.error('Signup failed:', errorText);
        alert(`Signup failed: ${errorText}`);
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again later.');
    }
  };

  return (
    <div className='signup'>
      <div className='signupForm'>
        <div className='signupHead'>
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
          <label htmlFor="municipality">Municipality:</label>
          <input type="text" id="municipality" name="municipality" value={formData.municipality} onChange={handleChange} required />
          <label htmlFor="barangay">Barangay:</label>
          <input type="text" id="barangay" name="barangay" value={formData.barangay} onChange={handleChange} required />
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} required />
          <label htmlFor="number">Contact Number:</label>
          <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" value={formData.birthday} onChange={handleChange} required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
