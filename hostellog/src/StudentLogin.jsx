import React, { useState } from "react";
import './StudentLogin.css';    
import BackgroundSlideShow from "./slideShow";

function Slogin(){

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        
        const handleLogin = (e)=> {
          e.preventDefault();
          console.log('Username:', username);
          console.log('Password',password);
          setUsername('');
          setPassword('');
        }


             return (
                <div className='login-container'>
                  <BackgroundSlideShow />
                  <form className='login-form' onSubmit={handleLogin}>
                    <h2>Student Login</h2>
                    <div className='form-control'>
                    <div className={`input-container ${username ? 'filled' : ''}`}>
                      <label htmlFor='username'></label>
                      <input
                        type='text'
                        id='username'
                        placeholder="Enter username"
                        value={username}
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
                    <button className="cl" type='submit'>Login</button>
                  </form>
                </div>
              );
            }

            export default Slogin;