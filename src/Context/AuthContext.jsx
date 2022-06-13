import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [loginCreds, setLoginCreds] = useState({});
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const { state } = useLocation();

  const login = () => {
    setAuth(true);
    navigate("/status");
    if (state.from) {
      navigate(state.from, { replace: true });
    }
  };
  
  const logout = () => {
    setAuth(false);
    setStatus("");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        login,
        logout,
        loginCreds,
        setLoginCreds,
        status,
        setStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};