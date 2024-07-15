// src/pages/DashboardPage.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashBoard from '../components/DashBoard';

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard Page</h2>
      <DashBoard />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
