import React from "react"
import "../Form.scss"
import { Link } from "react-router-dom";
import usePasswordToogle from "../../../hooks/usePasswordToogle";

export default function Login ({changeForm}) {
  const [InputType, Icon] = usePasswordToogle();

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

        <div className="password-container">
          <input type={InputType} required placeholder="**********" 
          />
          <span className="password-toggle-icon">{Icon}</span>
        </div>

      <div className="form-buttons-layout">
      <span>You dont have an account yet? <button onClick={()=>changeForm("register")}> Click here to register </button></span>
      <button type="submit">

					Sign in
				</button>
     </div>
			</form>
		</div>
	);
};
