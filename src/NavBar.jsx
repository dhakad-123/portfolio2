import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';


const NavBar=()=>{
  
    return(
        <>

<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand fw-bold fs-1 text-primary ps-5-auto " >Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto   mb-2 mb-lg-0  ">
        <li className="nav-item  ">
        <a className="nav-link"><NavLink to="/home" className="navlink_item  fw-bold me-5" >Home</NavLink></a>
        </li>
        <li className="nav-item  ">
        <a className="nav-link"><NavLink to="/projects" className="navlink_item  fw-bold me-5"  >Projects</NavLink></a>
        </li>
        <li className="nav-item ">
          <a className="nav-link"><NavLink to="/about" className="navlink_item  fw-bold me-5">About</NavLink></a>
        </li>
        <li className="nav-item ">
        <a className="nav-link"><NavLink to="/contact" className="navlink_item  fw-bold me-5" >Contact</NavLink></a>

        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    
        </>
    )
}
export default NavBar;
/*
div classNameName='navbar'>
    
        <NavLink className='navlinks' to="/">Home</NavLink>
        <NavLink className='navlinks' to="/projects"> Projects</NavLink>
        <NavLink className='navlinks' to="/about">About</NavLink>
        <NavLink className='navlinks' to="/contact">contact</NavLink>
    
        
    </div>
    */