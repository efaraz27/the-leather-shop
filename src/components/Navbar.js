import React from 'react'
import './css/Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='logo'>Leather Shop</div>
            <div className='nav-links'>
                <div className='nav-link'>Home</div>
                <div className='nav-link'>About</div>
                <div className='nav-link'>Products</div>
                <div className='nav-link'>Contact Us</div>
            </div>
        </div>
    )
}

export default Navbar