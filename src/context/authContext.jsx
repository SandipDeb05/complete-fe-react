import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const logIn = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  const value = {
    user,
    logIn,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuthContext is not in the scope of AuthContext Provider"
    );
  }
  return context;
};

export { AuthProvider, useAuthContext };
