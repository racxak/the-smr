import { useState } from "react";
import Login from "./Login"
import SignUp from "./SignUp";

export default function Auth(){
  const [form, setForm] = useState("login");

  function changeForm (formName){
    setForm(formName);
  }

  return(<>
  {form === "login" && <Login changeForm={changeForm}/> }
  {form === "register" && <SignUp changeForm={changeForm}/> }

   </>);
};