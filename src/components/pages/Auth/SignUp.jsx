import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePasswordToogle from "../../../hooks/usePasswordToogle";

export default function SignUp ({changeForm}) {
  const [InputType, Icon] = usePasswordToogle();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessrMsg] = useState("");
  
  function handleSignUp(e){
    e.preventDefault();
    console.log(fullName, email, password)
  }

	return (
    <div>
    <form className="form" onSubmit={handleSignUp}>
      <h1>Sign up </h1>

      <label> Full Name </label>
        <input type="text" required placeholder="Jhon Doe" onChange={(e)=> setFullName(e.target.value)} value={fullName}
				></input>

      <label> Email </label>
				<input type="email" required placeholder="jhon@email.com" onChange={(e)=> setEmail(e.target.value)} value={email}
				></input>

				<label> Hasło </label>
        <div className="password-container">
				<input type={InputType} required placeholder="**********"  onChange={(e)=> setPassword(e.target.value)} value={password}
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
