// src/pages/DashboardPage.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard Page</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
