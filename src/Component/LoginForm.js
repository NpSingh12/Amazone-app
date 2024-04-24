import React, { useState } from "react";
import "./LoginFormModule.css";

export default function LoginForm(props) {
  const submitemail = () => {
    console.log(email);
    console.log(password);
  };
  const handelemail = (e) => {
    setemail(e.target.value);
  };
  const handelpassword = (e) => {
    setpassword(e.target.value);
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div
      className={`login-form-container ${
        props.mode === "dark" ? "dark-mode" : ""
      }`}
    >
      <form className="login-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handelemail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handelpassword}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitemail}>
          Submit
        </button>
      </form>
    </div>
  );
}
