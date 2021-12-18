import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, registerWithEmail } = useAuth();

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

    registerWithEmail(
      loginData.name,
      loginData.email,
      loginData.password,
      navigate
    );
  };

  return (
    <div>
      <div className="container col-lg-6 m-auto col-md-6 col-sm-8 pt-5">
        <form className="border border-2 rounded p-5" onSubmit={handleSubmit}>
        <Link to="/">
              <img src="https://i.ibb.co/jkvPvwT/Logo.png" alt="" />
         </Link>
          <h2 className="my-3 text-center">Regitster</h2>
          {user.email && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              Registration successfull
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
          {error && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              {error}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <input
            className="form-control mb-3"
            type="text"
            onChange={handleOnChange}
            name="name"
            placeholder="Enter your name"
            id=""
          />
          <input
            className="form-control mb-3"
            type="email"
            onChange={handleOnChange}
            name="email"
            placeholder="Enter your email"
            id=""
          />
          <input
            className="form-control mb-3"
            type="password"
            onChange={handleOnChange}
            name="password"
            placeholder="Enter a password"
            id=""
          />
          <button className="btn btn-secondary">Register</button>
          <p>
            Already registered?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
