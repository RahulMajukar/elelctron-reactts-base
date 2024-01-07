import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../images/logo.webp'
function NavBar() {
    return (
        <nav>
            <ul>
                {/* <img src={logo} alt="logo" /> */}
                <li>
                    <NavLink to={"/"}>Ntt Data</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/user"}>Users</NavLink>
                </li>
                <li>
                    <NavLink to={"/login"}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar