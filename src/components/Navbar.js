import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ deletedCount }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="logo.png" alt="Logo" className="navbar-logo" />
        <span className="navbar-title">CLOUD STORAGE DASHBOARD</span>
      </div>
      <div className="navbar-right">
        <div className="navbar-icon-container" onClick={() => navigate('/deleted-files')}>
          <FaTrashAlt className="navbar-icon" />
          {deletedCount > 0 && (
            <span className="navbar-icon-count">{deletedCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
