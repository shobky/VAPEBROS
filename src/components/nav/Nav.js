import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './nav.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'


const Nav = ({ handleActivePage, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const openMenu = () => {
        setIsMenuOpen(true)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className='header-container'>
            <h1 onClick={() => navigate('/')}>VAPEBROS</h1>
            <div className='plus1036-display-none'>    {
                isMenuOpen ?
                    <IoCloseOutline onClick={closeMenu} className='nav-menu-btn_close' />
                    :
                    <AiOutlineMenu onClick={openMenu} className='nav-menu-btn' />
            }</div>
            <nav className={isMenuOpen ? 'nav-container-show' : 'nav-container'}>
                <div className='plus1036-display-none'>
                    <Link id='Home' to='/' className='nav-link' onClick={() => { handleActivePage('Home'); setIsMenuOpen(false); }}>Home</Link>
                </div>
                <Link id='Disposables' to='/Disposables' className='nav-link' onClick={() => { handleActivePage('Disposables'); setIsMenuOpen(false); }}>Disposables</Link>
                <Link id='E-Liquid' to='/E-Liquid' className='nav-link' onClick={() => { handleActivePage('E-Liquid'); setIsMenuOpen(false); }}>E-Liquid</Link>
                <Link id='Accessories' to='/Accessories' className='nav-link' onClick={() => { handleActivePage('Accessories'); setIsMenuOpen(false); }}>Accessories</Link>
                <Link id='Wholesale' to='/wholesale' className='nav-link' onClick={() => { handleActivePage('Wholesale'); setIsMenuOpen(false); }}>Wholesale</Link>
                <Link id='Blog' to='/blog' className='nav-link' onClick={() => { handleActivePage('Blog'); setIsMenuOpen(false); }}>Blog</Link>
                <Link id='About' to='/About' className='nav-link' onClick={() => { handleActivePage('About'); setIsMenuOpen(false); }}>About</Link>
                <Link id='Newsletter' to='/Newsletter' className='nav-link' onClick={() => { handleActivePage('Newsletter'); setIsMenuOpen(false); }}>Newsletter</Link>
                <Link id='Contact' to='/Contact' className='nav-link nav-link-special' onClick={() => { handleActivePage('Contact'); setIsMenuOpen(false); }}>Contact</Link>
            </nav>
        </div>
    )
}

export default Nav