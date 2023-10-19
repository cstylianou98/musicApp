import React from "react"
import {NavLink, Outlet} from 'react-router-dom'



let activeStyle = {
    textDecoration: 'underline'
}

function Nav() {
    return(
        <>
        <nav>
            <h1>Logo</h1>
            <ul className='nav-links'>
                <NavLink to='/' style={({isActive})=> (isActive ? activeStyle:undefined)}>Artist Info</NavLink>
                <NavLink to='/about' style={({isActive})=> (isActive ? activeStyle:undefined)}>About</NavLink>
                <NavLink to='/hits' style={({isActive})=> (isActive ? activeStyle:undefined)}>Song List</NavLink>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Nav