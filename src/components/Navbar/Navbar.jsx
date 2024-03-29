import React, { useState } from 'react'
import './Navbar.css'
import Mobilenav from './MobileNav/Mobilenav';



const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
    <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />


    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src="./assets/images/Logo3.png" alt="" />

            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                <li>
                    <a className='menu-item'>Skills</a>
                </li>
                <li>
                    <a className='menu-item'>Portfolio</a>
                </li>
                <li>
                    <a className='menu-item'>Contact Me</a>
                </li>

                <button className='contact-btn' onClick={() => {}}>
                <span>Hire Me</span>
                </button>
            </ul>

            <button class="menu-btn" onClick={toggleMenu}>
                <span
                class={"material-symbol-outlined"}
                style={{ fontSize: "1.8rem"}}
                >
                {openMenu ? '✕' : '☰'}
                </span>
            </button>


            </div>
            </nav></>
  )
}

export default Navbar