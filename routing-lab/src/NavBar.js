import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar =()=>{
return (
    <nav>
        <NavLink exact to={'/'} >Home</NavLink>
        <NavLink to={'/dog'} >Dog Img</NavLink>
        

    </nav>
)
}

export default NavBar;

