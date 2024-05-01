import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate for navigation

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Encode credentials
    const credentials = btoa(`${username}:${password}`);

    // Send a request to the backend to authenticate the user
    const response = await fetch('http://172.16.1.70:3000/api/protected', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    });

    if (response.ok) {
      // Authentication successful, navigate to Home
      navigate('/Home'); // Use navigate instead of history.push
    } else {
      // Authentication failed, handle errors, such as showing an error message
      alert('Authentication failed! Please check your username and password.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;