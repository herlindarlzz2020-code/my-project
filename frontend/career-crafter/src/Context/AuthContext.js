import React, { createContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create the context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return {
          token,
          refreshToken: localStorage.getItem('refreshToken'),
          userId:
            decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
          role:
            decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]?.toLowerCase(),
        };
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        return null;
      }
    }
    return null;
  });

  const login = (token, refreshToken) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    const decoded = jwtDecode(token);
    const userId =
      decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const role =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]?.toLowerCase();

    setAuth({ token, refreshToken, userId, role });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;