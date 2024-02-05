import React from "react";
import { Link } from "react-router-dom";

export default function SignUp () {
	return (
    <div>
    <form className="form">
      <h1>Sign up </h1>

      <label> Email </label>
				<input type="email" required placeholder="jhon@email.com"
				></input>

				<label> Hasło </label>
				<input type="password" required placeholder="**********"
				></input>
    
    <div className="form-buttons-layout">
    <span>Already have an account?
      <Link to="/login"> Click here to login</Link>  </span>
     <button type="submit">
        Sign UP
      </button>
    </div>
    </form>
  </div>
	);
};
