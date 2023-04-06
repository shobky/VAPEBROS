import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './nav.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'


const Nav = ({ handleActivePage, fixed }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const openMenu = () => {
        setIsMenuOpen(true)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }


    return (
        <div className={fixed ? 'header-fixed' : 'header-container'}>
            {fixed && <h1 onClick={() => { navigate('/'); handleActivePage('') }}>VAPEBROS</h1>}
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
                <Link id='Disposables' to='/disposables' className='nav-link' onClick={() => { handleActivePage('Disposables'); setIsMenuOpen(false); }}>Disposables</Link>
                <Link id='E-Liquid' to='/e-Liquid' className='nav-link' onClick={() => { handleActivePage('E-Liquid'); setIsMenuOpen(false); }}>E-Liquid</Link>
                <Link id='Accessories' to='/accessories' className='nav-link' onClick={() => { handleActivePage('Accessories'); setIsMenuOpen(false); }}>Accessories</Link>
                <Link id='Wholesale' to='/wholesale' className='nav-link' onClick={() => { handleActivePage('Wholesale'); setIsMenuOpen(false); }}>Wholesale</Link>
                <Link id='Blog' to='/blog' className='nav-link' onClick={() => { handleActivePage('Blog'); setIsMenuOpen(false); }}>Blog</Link>
                <Link id='About' to='/about' className='nav-link' onClick={() => { handleActivePage('About'); setIsMenuOpen(false); }}>About</Link>
                <Link id='Newsletter' to='/newsLetter' className='nav-link' onClick={() => { handleActivePage('Newsletter'); setIsMenuOpen(false); }}>Newsletter</Link>
                <Link id='Contact' to='/contact' className='nav-link nav-link-special' onClick={() => { handleActivePage('Contact'); setIsMenuOpen(false); }}>Contact</Link>
            </nav>
        </div>
    )
}

export default Nav