import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './nav.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import Notification from '../notification/Notification';


const Nav = ({ handleActivePage, fixed }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [notification, setNotification] = useState(true)

    const navigate = useNavigate()
    const openMenu = () => {
        setIsMenuOpen(true)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const handleSetNotification = () => {
        setNotification(false)
    }




    let startY; // will hold the starting Y position of the touch

    function handleTouchStart(event) {
        // store the starting Y position of the touch
        startY = event.touches[0].clientY;
    }

    function handleTouchEnd(event) {
        const endY = event.changedTouches[0].clientY; // ending Y position of the touch

        // calculate the distance moved
        const distance = startY - endY;

        // check if the user swiped up or down
        if (distance > 0) {
            // user swiped up
            document.getElementById('navigation').classList.add('nav_scroll');
        } else {
            // user swiped down
            document.getElementById('navigation').classList.remove('nav_scroll');

        }
    }

    function handleScroll(event) {
        // get the direction of the scroll
        const direction = event.deltaY > 0 ? 'up' : 'down';

        // check if the user scrolled up or down
        if (direction === 'up') {
            // user scrolled up
            document.getElementById('navigation').classList.remove('nav_scroll');

        } else {
            // user scrolled down
            document.getElementById('navigation').classList.add('nav_scroll');

        }
    }

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('wheel', handleScroll);


    return (
        <div className={fixed ? 'header-fixed' : 'header-container'}>
            {/* {notification &&
                <>
                    <Notification handleSetNotification={handleSetNotification} />
                    <br />
                </>
            } */}

            {<h1 onClick={() => { navigate('/'); handleActivePage('') }}>VAPEBROS</h1>}
            <div className='plus1036-display-none'>    {
                isMenuOpen ?
                    <IoCloseOutline onClick={closeMenu} className='nav-menu-btn_close' />
                    :
                    <AiOutlineMenu onClick={openMenu} className='nav-menu-btn' />
            }</div>
            <nav id='navigation' className={isMenuOpen ? 'nav-container-show' : 'nav-container'}>
                <Link id='Home' to='/' className='nav-link' onClick={() => { handleActivePage('Home'); setIsMenuOpen(false); }}>Home</Link>
                <Link id='Disposables' to='/disposables' className='nav-link' onClick={() => { handleActivePage('Disposables'); setIsMenuOpen(false); }}>Disposables</Link>
                <Link id='E-Liquid' to='/e-Liquid' className='nav-link' onClick={() => { handleActivePage('E-Liquid'); setIsMenuOpen(false); }}>E-Liquid</Link>
                <Link id='Accessories' to='/accessories' className='nav-link' onClick={() => { handleActivePage('Accessories'); setIsMenuOpen(false); }}>Accessories</Link>
                <Link id='Wholesale' to='/wholesale' className='nav-link' onClick={() => { handleActivePage('Wholesale'); setIsMenuOpen(false); }}>Wholesale</Link>
                <Link id='Blog' to='/blog' className='nav-link' onClick={() => { handleActivePage('Blog'); setIsMenuOpen(false); }}>Blog</Link>
                <Link id='About' to='/about' className='nav-link' onClick={() => { handleActivePage('About'); setIsMenuOpen(false); }}>About</Link>
                <Link id='Newsletter' to='/newsLetter' className='nav-link' onClick={() => { handleActivePage('Newsletter'); setIsMenuOpen(false); }}>Newsletter</Link>
                <Link id='Contact' to='/contact' className='nav-link-special' onClick={() => { handleActivePage('Contact'); setIsMenuOpen(false); }}>Contact</Link>
            </nav>
        </div>
    )
}

export default Nav