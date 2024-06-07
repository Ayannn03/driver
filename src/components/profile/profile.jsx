import React, { useState, useEffect } from 'react';
import './profile.css';
import TabBar from '../tab-bar/tabBar';

const Profile = () => {
  // Initialize state with the value retrieved from localStorage or an empty string if it doesn't exist
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // This effect runs only once on component mount

  return (
    <div className='profile'>
      <div className='profile-contents'>
        <div className='profile-container'>
          <div>
            <h2>Welcome, {username || ''}!</h2>
          </div>
        </div>
        <div className='account'>
          <div className='myAccount'>
          <h3>My Account</h3>
          <div>
            <li>
              Edit Information
            </li>
            <li>
              Enrolled Vehicle
            </li>
            <li>
              Emergency Contact
            </li>
          </div>
          </div>
          <div className='settings'>
          <h3>General</h3>
          <div>
            <li>
              Help Center
            </li>
            <li>
              Settings
            </li>
          </div>
          </div>
        </div>
        <TabBar />
      </div>
    </div>
  );
};

export default Profile;