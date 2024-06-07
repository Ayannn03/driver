import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './enrollment.css'

const API_URL = 'https://main--lambent-cupcake-1da5a6.netlify.app/.netlify/functions/api/driver/enroll-vehicle';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    type: '',
    model: '',
    year: '',
    plateNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Server Error');
      }

      const data = await response.json();
      console.log(data);
      navigate('/login-driver');
    } catch (error) {
      console.error('Enrollment error:', error);
      alert(`Enrollment failed: ${error.message}`);
    }
  };

  return (
    <div className='enrollment'>
      <div className='enroll-contents'>
      <h2>Enrollment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" placeholder="Type of Vehicle" value={formData.type} onChange={handleChange} required />
        <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
        <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
        <input type="text" name="plateNumber" placeholder="Plate Number" value={formData.plateNumber} onChange={handleChange} required />
        
        <button type="submit">Enroll Vehicle</button>
      </form>
      </div>
    </div>
  );
};

export default Enrollment;
