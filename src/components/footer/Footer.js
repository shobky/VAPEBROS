import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { FiExternalLink } from 'react-icons/fi'
import emailjs from '@emailjs/browser';

const Footer = () => {

    const emailRef = useRef()

    const handleSubscribe = (e) => {
        e.preventDefault()

        if (!emailRef.current.value) {
            console.log('no email provided')
            return
        }

        const serviceId = 'service_kqoy29o';
        const templateId = 'template_c50icpf';
        const userId = 'MIKvidR_XPs1Mdf0l';
        const templateParams = {
            to_email: emailRef.current.value,
            subject: 'Thank you for submitting your email',
            message_html: 'Thank you for submitting your email. We will contact you soon!'
        };

        emailjs.init(userId);
        emailjs.send(serviceId, templateId, templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }
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
                            <a className='footer-link' href='#'>Facebook <FiExternalLink className='footer-link-ico' /></a>
                            <a className='footer-link' href='#'>Instagram<FiExternalLink className='footer-link-ico' /></a>
                            <a className='footer-link' href='#'>Linkedin<FiExternalLink className='footer-link-ico' /></a>
                            <a className='footer-link' href='#'>Email<FiExternalLink className='footer-link-ico' /></a>

                        </div>

                        <Link className='footer-link footer-link_special' to='/Contact'>Contact</Link>
                    </div>
                    <p className='copyright-msg'>&copy; 2023 VAPEBROS. All Rights Reserved.</p>
                </div>
                <div className='footer-newletter-section'>
                    <p>Join our newsletter to stay up to date with new products.</p>
                    <form onSubmit={handleSubscribe} className='footer-newletter-flex'>
                        <input ref={emailRef} placeholder='Email' />
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Footer