import React from "react";
import "./Home.scss"
import {Link} from "react-router-dom"
import Button from "../../Button"

export default function Home(){
  return(<div className="home-page"> 
    <div>Your walls deserve some love too – dress them up with art that's as cool as you are.</div>
    <img src="https://i.pinimg.com/564x/fe/ee/c2/feeec2549433c8962dafaa9c7b19f0b7.jpg" alt="" />
    <img src="https://i.pinimg.com/564x/1f/e6/b0/1fe6b04108705f5a6d82373c4fd5db60.jpg" alt="" />
    <h1>Creative design</h1>
    
    <Link to="/projects">  <Button>Explore</Button></Link>
      

   </div>);

};