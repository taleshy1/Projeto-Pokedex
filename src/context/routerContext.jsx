import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Router = createContext();

const RouterContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Router.Provider value={{ navigate, location }}>{children}</Router.Provider>
  );
};
export default RouterContextProvider;
