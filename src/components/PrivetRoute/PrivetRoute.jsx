import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-lg loading-spinner text-warning"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/register"></Navigate>;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
