// src/App.js
import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './style.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <div className="app">
      <div className="overlay" />
      <div className="container">
        <h1>Welcome to DevMinds SPA</h1>
        <p>This is a simple, secure single-page application using OIDC login.</p>

        {!user ? (
          <div className="login-section">
            <h3>Login with Google</h3>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => console.log('Login Failed')}
            />
          </div>
        ) : (
          <div className="user-section">
            <h3>Welcome, {user.name}</h3>
            <p>Email: {user.email}</p>
            <img src={user.picture} alt="User" className="avatar" />
            <br />
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
