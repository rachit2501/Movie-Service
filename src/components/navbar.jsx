import React from 'react';
import {Link , NavLink}  from 'react-router-dom'

const navBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
        Vidly
        </Link>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
      <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
          <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
          <NavLink className="nav-item nav-link" to="/rental">Rentals</NavLink>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
          
      </div>
    </div>
  </nav>
    )
}
 
export default navBar;