import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Logout = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <Button className="header-logout" variant="link" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
