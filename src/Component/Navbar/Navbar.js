import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [isMobile,setIsmobile]=useState(false)
    return (
        <nav className="navbar">
            <Link to="/"><img src={logo} alt=""/></Link>
            <ul className={isMobile ? 'nav_links_mobile' : 'navlinks'}>
                <li><Link to="/home" className='home'>Home</Link></li>
                <li><Link to="/about" className='about'>About</Link></li>
                <li><Link to="/skill" className='skill'>Skill</Link></li>
                <li><Link to="/contact" className='contact'>Contact</Link></li>
                <li><Link to="/signup" className='signup'>Sign up</Link></li>
            </ul>
            <button className="mobile_menu_icon"
            onClick={()=>setIsmobile(!isMobile)}
            >
                {
                   isMobile ? <i className="fas fa-times"></i> :<i className="fas fa-bars"></i> 
                }
            </button>
        </nav>
    );
};

export default Navbar;