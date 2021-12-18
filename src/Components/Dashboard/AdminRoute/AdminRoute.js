import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = useAuth();
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
  
 if(admin && user.email){
     return children;
 }

 return <Navigate to="/dashboard" state={{ from: location }} />
};

export default AdminRoute;
