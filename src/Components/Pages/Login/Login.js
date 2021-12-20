import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

/* eslint-disable no-unused-expressions */

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, loading, loginWithEmail } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmail(loginData.email, loginData.password, location, navigate);
  };
  const redirect = location.state?.from || "/";

  useEffect(() => {
    user.email ? navigate(redirect) : "/";
  }, [user, navigate, redirect]);

  return (
    <div>
      <div>
        <div className="container col-lg-6 m-auto col-md-6 col-sm-8 pt-5">
        
          <form className="border border-2 rounded p-5" onSubmit={handleSubmit}>
          <Link to="/">
              <img src="https://i.ibb.co/jkvPvwT/Logo.png" alt="" />
         </Link>
            {loading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-grow text-warning" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <h2 className="my-3 text-center">Login</h2>
            {error && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                {error}
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            <input
              className="form-control mb-3"
              type="email"
              name="email"
              placeholder="Enter your mail"
              onChange={handleOnChange}
              id="email"
            />
            <input
              className="form-control mb-3"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleOnChange}
              id="password"
            />
            <button className="btn btn-secondary">Login</button>
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/register">Register</Link>
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
