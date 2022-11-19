import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h3 className="brand">Projeto Api &nbsp;</h3>
            <span className="brand span"> Temperatura</span>
            <ul className="link_list">
                <li className="link_list li a">
                    <NavLink to="/" className="link_list li a">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/weather" className="link_list li a">Temperatura</NavLink>
                </li>
            </ul>
    </nav>
  )
}

export default NavBar