// src/pages/LoginPage.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Watermark } from 'antd';
const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <Watermark content="Dinkas">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </Watermark>
  );
};

export default LoginPage;
