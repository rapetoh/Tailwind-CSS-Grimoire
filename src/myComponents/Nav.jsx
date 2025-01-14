import React from 'react';
import {headerLogo} from '../assets/images/index.js';
import {hamburger} from '../assets/icons/index.js';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="NikeLogo" width={120} height={20} />
            </a>
            <ul className="inline-flex justify-between items-center gap-16 max-lg:hidden">
                <li><a href="/home">Home</a></li>
                <li><a href="/home">About Us</a></li>
                <li><a href="/home">Contact</a></li>
                <li><a href="/home">Home</a></li>
            </ul>
            <button>
                <img src={hamburger} alt="Hamburger" width={22} className="hidden max-lg:block"/>
            </button>
        </nav>
    </header>
  )
}

export default Nav
