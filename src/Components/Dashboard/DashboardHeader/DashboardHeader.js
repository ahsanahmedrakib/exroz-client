import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const DashboardHeader = () => {
  const { loading, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/">
          Exroz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* {admin ? ( */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link text-light" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/dashboard/myorders">
                  My Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/dashboard/addservices">
                  Add Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/dashboard/manageorders">
                  Manage Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/dashboard/addpricing">
                  Add pricing
                </Link>
              </li>
            </ul>
          {/* ) : ( */}
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link text-light" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/dashboard/myorders">
                  My Orders
                </Link>
              </li>
            </ul>
          )} */}
          <ul className="navbar-nav me-auto">
            <button
              className="nav-link logout-button text-danger"
              style={{ marginRight: "10px", fontSize: "20px" }}
              onClick={logOut}
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}


      <Outlet />
    
    </div>
  );
};

export default DashboardHeader;
