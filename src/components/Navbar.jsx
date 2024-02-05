import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import "./Navbar.scss"

export default function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false);

  return(<nav className="nav">

      <li className="logo"> <Link to="/">THE.SMR</Link></li>
      <CiMenuBurger onClick={() => setMenuOpen(prev => !prev)} className="menu"/>
      <ul className={menuOpen ? "open" : ""}>
      <li> <NavLink to="/about">About</NavLink></li>
      <li> <NavLink to="/projects">Projects</NavLink></li>
      <li> <NavLink to="/contact">Contact</NavLink></li>
      <li> <NavLink to="/cart">Cart</NavLink></li>
      <li> <NavLink to="/login"><CiUser className="user"/></NavLink></li>

    </ul> 
  </nav>);
};