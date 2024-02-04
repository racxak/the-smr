import React from "react";
import "./NotFound.scss"
import {Link} from "react-router-dom"
import Button from "../../Button"

export default function NotFound(){
  return(
    <div className="not-found"> 
    <div>Wow, how did you even get here? Return to the home page to discover new possibilities for decorating your interiors</div>
    <img src="https://i.pinimg.com/564x/fe/ee/c2/feeec2549433c8962dafaa9c7b19f0b7.jpg" alt="" />
    <img src="https://i.pinimg.com/564x/1f/e6/b0/1fe6b04108705f5a6d82373c4fd5db60.jpg" alt="" />
    <h1>Error 404 Not found</h1>
    
    <Link to="/">  <Button>TAKE ME HOME</Button></Link>
      

   </div>
);
};