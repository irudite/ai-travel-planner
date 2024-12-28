import React from 'react'
import { MdOutlineCardTravel } from "react-icons/md";
import './Navbar.css'

const Navbar = () => {
  return (
    <div class='navbar'>
      <div class='navbar__logo'>
        <MdOutlineCardTravel/> 
        <div class='navbar__logo--text'>
          <h2> PlanIt </h2>
        </div>
      </div>

      <div class='navbar__container'>
        <nav class='navbar__container__nav'>
          <a href='#about'> About </a>
          <a href='#login'> Login </a>
          <a href='#sign-up'> Sign Up </a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
