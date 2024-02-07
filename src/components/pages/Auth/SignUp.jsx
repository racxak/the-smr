import React from "react";
import { Link } from "react-router-dom";
import usePasswordToogle from "../../../hooks/usePasswordToogle";

export default function SignUp ({changeForm}) {
  const [InputType, Icon] = usePasswordToogle();

	return (
    <div>
    <form className="form">
      <h1>Sign up </h1>

      <label> Email </label>
				<input type="email" required placeholder="jhon@email.com"
				></input>

				<label> Hasło </label>
        <div className="password-container">
				<input type="password" required placeholder="**********"
				></input>
         <span className="password-toggle-icon">{Icon}</span>
        </div>
    
    <div className="form-buttons-layout">
    <span>Already have an account? <button onClick={()=>changeForm("login")}>  Click here to login</button></span>
     <button type="submit">
        Sign UP
      </button>
    </div>
    </form>
  </div>
	);
};
