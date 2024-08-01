import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userLogin = useSelector((state) => state.login.value); 
  const location = useLocation();

  if (true) {
    return <Navigate to="/login"/>;
  }

  return children;
};

export default ProtectedRoute;
