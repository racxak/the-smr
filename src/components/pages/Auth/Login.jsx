import React from "react"
import "../Form.scss"
import { Link } from "react-router-dom";

export default function Login () {

	return (
		<div>
			<form className="form">
				<h1>Sign in </h1>
				<label> Full Name </label>
        <input type="text" required placeholder="Jhon Doe"
				></input>

				<label> Email </label>
				<input type="email" required placeholder="jhon@email.com"
				></input>

				<label> Hasło </label>
				<input type="password" required placeholder="**********"
        
				></input>
			
      <div className="form-buttons-layout">
      <span>You dont have an account yet? <Link to="/sign-up">Click here to register</Link> </span>
      <button type="submit">
					Sign in
				</button>
     </div>
			</form>
		</div>
	);
};
