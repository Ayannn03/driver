import React from 'react';
import { Link } from 'react-router-dom';
import './tabBar.css';

const TabBar = () => {
  return (
    <div className='tabBar'>
      <ul>
        <li className="nav-item">
          <Link to="/booking" className="nav-link">Bookings</Link>
        </li>
        <li className="nav-item">
          <Link to="/messages" className="nav-link">Messages</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default TabBar;