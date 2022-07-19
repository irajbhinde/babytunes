import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    authStatus: !!localStorage.getItem("token"),
    authToken: localStorage.getItem("token"),
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
