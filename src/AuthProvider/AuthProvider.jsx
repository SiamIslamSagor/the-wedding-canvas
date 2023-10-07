import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  // scroll top
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(result => setServices(result));
  }, []);
  const data = {
    handleTop,
    user: "moksed ali",
    services,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
