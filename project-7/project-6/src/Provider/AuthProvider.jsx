import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

  const login = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const { exp } = jwt_decode(tokenStr);
      const now = Math.floor(Date.now() / 1000);
      const maxAge = exp - now;

      setCookie("jwt", tokenStr, { path: "/", maxAge, sameSite: true });
      const decodedUser = jwt_decode(tokenStr);
      setUser(decodedUser);
      return;
    }
    logout();
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookie("jwt", { path: "/" });
  };

  useEffect(() => {
    if (cookie?.jwt) {
      setToken(cookie.jwt);
      setUser(jwt_decode(cookie.jwt));
    }
  }, [cookie]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
