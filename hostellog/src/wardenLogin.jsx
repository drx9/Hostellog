import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './wardenLogin.css';
import BackgroundSlideShow from './slideShow';

function Wlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      setMessage(response.data.message);

  
      navigate('/Wdashboard');
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        setMessage('Network error: No response from server');
      } else {
        setMessage(`Error: ${error.message}`);
      }
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className='login-container'>
      <BackgroundSlideShow />
      <form className='login-form' onSubmit={handleLogin}>
        <h2>Warden Login</h2>
        <div className='form-control'>
          <div className={`input-container ${username ? 'filled' : ''}`}>
            <label htmlFor='username'></label>
            <input
              type='text'
              id='username'
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='form-control'>
          <div className={`input-container ${password ? 'filled' : ''}`}>
            <label htmlFor='password'></label>
            <input
              type='password'
              id='password'
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type='submit'>Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Wlogin;
