import React from 'react';
import { headerLogo } from '../assets/images/index.js';
import { hamburger } from '../assets/icons/index.js';
import { useRef } from 'react';

const Nav = () => {

    var nav = false;
    const navRef = useRef("");

    const handleClick = () => {
        if(nav == false){
            nav = true;
            navRef.current.style.display = "block";
        }
        else{
            nav = false;
            navRef.current.style.display = "none";
        }
    }


    return (
        <>
            <header className='padding-x py-8 z-10 w-full'>
                <nav className='flex justify-between items-center max-container'>
                    <a href="#home">
                        <img src={headerLogo} alt="NikeLogo" width={120} height={20} />
                    </a>
                    <ul className="inline-flex justify-between items-center gap-16 max-lg:hidden">
                        <li className='text-purple font-bold' ><a href="#home">Home</a></li>
                        <li className='text-[#FF6452] font-bold' ><a href="#specialOffer">Special Offer</a></li>
                        <li className='text-[#FF6452] font-bold' ><a href="#aboutUs">About Us</a></li>
                        <li className='text-[#FF6452] font-bold' ><a href="#contact">Contact</a></li>
                    </ul>
                    <button onClick={handleClick}>
                        <img src={hamburger} alt="Hamburger" width={22} className="hidden max-lg:block" />
                    </button>
                </nav>
            </header>
            <nav ref={navRef} className='lg:hidden top-16 m-auto min-h-3 my-3'>
                <ul className="flex flex-col gap-2 justify-center items-center">
                    <li className='text-purple font-bold' ><a href="#home">Home</a></li>
                    <li className='text-[#FF6452] font-bold' ><a href="#specialOffer">Special Offer</a></li>
                    <li className='text-[#FF6452] font-bold' ><a href="#aboutUs">About Us</a></li>
                    <li className='text-[#FF6452] font-bold' ><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
