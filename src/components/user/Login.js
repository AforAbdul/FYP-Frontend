import React, { Fragment, useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import validator from "validator";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      alert.success("Logged in successfully.");
      history.push(redirect);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (validator.isEmpty(email)) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (validator.isEmpty(password)) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      dispatch(login(email, password));
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Login"} />

          <h3 className="title-30 text-center mb-35">Login Your Account</h3>
          <form
            className="login-form"
            encType="appilcation/json"
            onSubmit={submitHandler}
          >
            <div className="row">
              <div className="col-12">
                <div className="form-inner">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="fname"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <div className="error" style={{ color: "red" }}>
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="form-inner hidden-icon">
                  <label htmlFor="email_password">Password</label>
                  <input
                    type="password"
                    name="name"
                    placeholder="*****"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <div className="error" style={{ color: "red" }}>
                      {errors.password}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="form-inner d-flex justify-content-between">
                  <label></label>
                  <Link to="/password/forgot" className="forget-password">
                    Forgotten password?
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <div className="form-inner">
                  <button
                    className="primary--btn login-btn"
                    type="submit"
                    disabled={loading ? true : false}
                  >
                    Login Account
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
