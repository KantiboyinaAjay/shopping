import React, { useState } from 'react';
import './css/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
        navigate('/home')
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container1">
      <form className="login-form1" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error1">{error}</div>}
        <div className="form-group1">
          <label htmlFor="username1">Username:</label>
          <input
            type="text"
            id="username1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit1" className='button1'>Login</button>
      </form>
    </div>
  );
};

export default Login;
