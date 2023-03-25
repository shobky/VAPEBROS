import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { FiExternalLink  } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className='footer-container'>
           
            <div className='footer-foot'>
                <div className='footer-foot-inner'>
                    <h2>VAPEBROS</h2>
                    <div className='footer-links'>
                        <div className='footer-links-inner'>
                            <Link className='footer-link' to='/E-Liquid'>E-Liquid</Link>
                            <Link className='footer-link' to='/Disposables' >Disposables</Link>
                            <Link className='footer-link' to='/Accessories' >Accessories</Link>
                            <Link className='footer-link' to='/Wholesale' >Wholesale</Link>

                        </div>
                        <div className='footer-links-inner'>
                            <Link className='footer-link' to='/'>Home</Link>
                            <Link className='footer-link' to='/Blog' >Blog</Link>
                            <Link className='footer-link' to='/About' >About</Link>
                            <Link className='footer-link' to='/Newsletter' >Newsletter</Link>

                        </div>
                        <div className='footer-links-ext'>
                            <a className='footer-link' href='#'>Facebook <FiExternalLink className='footer-link-ico'/></a>
                            <a className='footer-link' href='#'>Instagram<FiExternalLink className='footer-link-ico'/></a>
                            <a className='footer-link' href='#'>Linkedin<FiExternalLink className='footer-link-ico'/></a>
                            <a className='footer-link' href='#'>Email<FiExternalLink className='footer-link-ico'/></a>

                        </div>

                        <Link className='footer-link footer-link_special' to='/Contact'>Contact</Link>
                    </div>
                    <p className='copyright-msg'>&copy; 2023 VAPEBROS. All Rights Reserved.</p>
                </div>
                <div className='footer-newletter-section'>
                <p>Join our newsletter to stay up to date with new products.</p>
                <div className='footer-newletter-flex'>
                    <input placeholder='Email' />
                    <button>Subscribe</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Footer