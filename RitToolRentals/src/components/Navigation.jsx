import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

const NavBar = () => {
  return (
    <>
        <button>
            <Link to="/Home">Home</Link>
        </button>
        <button>
            <Link to="/Mylistings">Create Listing</Link>
        </button>
        <button>
            <Link to="/">Sign out</Link>
        </button>
    </>
  );
};
export default NavBar;