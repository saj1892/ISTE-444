import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

const NavBar = () => {
  return (
    <>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <button>
            <Link to="/Home">Home</Link>
        </button>
        <button>
            <Link to="/Mylistings">My Listings</Link>
        </button>
        <button>
            <Link to="/">Sign out</Link>
        </button>
    </>
  );
};
export default NavBar;