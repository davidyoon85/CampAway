import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

function SessionForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return () => props.clearErrors();
  }, [])

  function loginDemo(e) {
    e.preventDefault();
    setFirstName("Guest")
    setLastName("demo")
    setZipCode(10001)
    setEmailAddress("demo@demo.com")
    setPassword("123456")

    let demoUser = {
      'first_name': "Guest",
      'last_name': "demo",
      'zip_code': 10001,
      'email_address': "demo@demo.com",
      'password': "123456"
    }

    props.processForm(demoUser).then(props.closeModal);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let payload = {
      'first_name': firstName,
      'last_name': lastName,
      'zip_code': zipCode,
      'email_address': emailAddress,
      'password': password
    }

    const user = Object.assign({}, payload);
    props.processForm(user).then(props.closeModal);
  }

  function update(field) {

    return e => {
      if (field === 'email_address') {
        setEmailAddress(e.target.value);
      } else if (field === 'password') {
        setPassword(e.target.value);
      } else if (field === 'first_name') {
        setFirstName(e.target.value);
      } else if (field === 'last_name') {
        setLastName(e.target.value);
      } else if (field === 'zip_code') {
        setZipCode(e.target.value);
      }
    }
  }

  function renderErrors() {
    return (
      <ul>
        {props.errors.map((error, i) => (
          <li className="session-error-message" key={`errors-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  const { formType, closeModal, otherForm } = props;

  if (formType === "Log in") {
    return (
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form-box">
          <p className="title">Welcome back!</p>
          <p className="subtitle">It's about time for another camping trip</p>

          <div onClick={closeModal} className="close-x" />

          <div className="login-form">
            <button className="demo_button" onClick={loginDemo}>
              Log in as a Guest
              </button>
            &nbsp;
              <h1>or</h1>
            <br />
            <input
              type="email"
              onChange={update("email_address")}
              className="login-input"
              placeholder="Email address"
              required
            />
            <br />
            <input
              type="password"
              minLength="6"
              onChange={update("password")}
              className="login-input"
              placeholder="Password"
            />
            <br />
            <div className="session_error_message">{renderErrors()}</div>
            <input
              id="login_submit"
              type="submit"
              value={formType}
              className="session-submit"
            />
            <br />
            <div className="modal_footer1">
              Don't have a CampAway account? &nbsp;
                <span className="modal_signin">
                {otherForm}
                {`!`}
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  } else if (formType === "Sign up") {
    return (
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form-box">
          <p className="title">Join CampAway</p>
          <p className="subtitle">Discover the best camping near me</p>

          <div onClick={closeModal} className="close-x" />
          <div className="login-form">
            <div className="modal_table">
              <div className="modal_table1">
                <input
                  type="text"
                  onChange={update("first_name")}
                  className="login-input"
                  placeholder="First name..."
                  required
                />
              </div>

              <div className="modal_table2">
                <input
                  type="text"
                  onChange={update("last_name")}
                  className="login-input"
                  placeholder="Last name..."
                  required
                />
              </div>
            </div>

            <br />
            <input
              type="text"
              onChange={update("zip_code")}
              className="login-input"
              placeholder="Zip code..."
              required
            />
            <br />
            <input
              type="email"
              onChange={update("email_address")}
              className="login-input"
              placeholder="Email address..."
              required
            />
            <br />
            <input
              type="password"
              minLength="6"
              onChange={update("password")}
              className="login-input"
              placeholder="Password..."
            />
            <br />
            <div className="session_error_message">{renderErrors()}</div>
            <input
              id="login_submit"
              type="submit"
              className="session-submit"
              required
            />
            <div className="modal_footer2">
              By signing up, I agree to CampAway's
                <br /> terms and privacy policy.
                <br />
              <p />
              <div className="modal_footer2_sub">
                Already a CampAwayer?&nbsp;
                  <span className="modal_signin">
                  {otherForm}
                  {`!`}{" "}
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);