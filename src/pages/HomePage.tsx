// src/pages/DashboardPage.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const HomePage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <a onClick={() => {
        navigate('/dashboard');
      }}>
        go to dashboard
      </a>
      {/* <NoneOptim/> */}
      {/* <Optimim/> */}
    </div>
  );
};

export default HomePage;
