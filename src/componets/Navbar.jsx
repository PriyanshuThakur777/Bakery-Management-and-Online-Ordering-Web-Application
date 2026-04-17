import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Assets } from '../assets/Assets'

const Navbar = ({ theme, onToggleTheme }) => {
  const navClass = ({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`;

  return (
    <div>
        <nav className="navbar navbar-expand-lg bakery-navbar" >
  <div className="container-fluid">
    <Link className="navbar-brand logo" to="/" >Yummy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
        <NavLink className={navClass} to="/">Home</NavLink>
        <NavLink className={navClass} to="/about">About</NavLink>
        <NavLink className={navClass} to="/menu">Menu</NavLink>
        <NavLink className={navClass} to="/track-order">Track Order</NavLink>
        <NavLink className={navClass} to="/my-orders">My Orders</NavLink>
        <NavLink className={navClass} to="/contact">Contact</NavLink>
        <button type="button" className="btn btn-sm theme-toggle-btn" onClick={onToggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <NavLink className={navClass} to="/cart"><img src={Assets.cart} alt="Cart" /></NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar
