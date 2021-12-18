import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  const location = useLocation()
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
 if(user.email){
     return children;
 }

 return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;
