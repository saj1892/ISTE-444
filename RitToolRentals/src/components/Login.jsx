import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <button>
            <Link to="/Home">Sign in</Link>
        </button>
    </>
  );
};
export default Login;