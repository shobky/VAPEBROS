import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import emailjs from '@emailjs/browser';
import { ImSpinner8 } from 'react-icons/im'
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
    const [mailStatus, setMailStatus] = useState('')
    const emailRef = useRef()

    const handleSubscribe = async (e) => {
        e.preventDefault()
        setMailStatus('loading')

        if (!emailRef.current.value) {
            setMailStatus('failed')
            setTimeout(() => {
                setMailStatus('')
            }, 800);
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
        await emailjs.send(serviceId, templateId, templateParams)
            .then(function (response) {
                setMailStatus('sent')
                emailRef.current.value = ''
            }, function (error) {
                setMailStatus('failed')
            });

        setTimeout(() => {
            setMailStatus('')
        }, 800);
    }

    return (
        <div className='footer-container'>

            <div className='footer-foot'>
                <div className='footer-foot-inner'>
                    <h2>BROVAPE</h2>
                    <div className='footer-links'>
                        <div className='footer-links-inner'>
                            <Link className='footer-link' to='/'>Home</Link>
                            <Link className='footer-link' to='/About' >About</Link>
                            <Link className='footer-link' to='/Blog' >Blog</Link>
                            <Link className='footer-link' to='/Newsletter' >Newsletter</Link>
                        </div>
                        <div className='footer-links-inner'>
                            <Link className='footer-link' to='/Disposables' >Disposables</Link>
                            <Link className='footer-link' to='/E-Liquid'>E-Liquid</Link>
                            <Link className='footer-link' to='/Accessories' >Accessories</Link>
                            <Link className='footer-link' to='/Wholesale' >Wholesale</Link>

                        </div>
                        <div className='footer-links-ext'>
                            <div className='footer-sochial-links'>
                                <a className='footer-link' href='#'><AiFillFacebook /></a>
                                <a className='footer-link' href='#'><FaInstagramSquare /></a>
                                <a className='footer-link' href='#'><AiFillLinkedin /></a>
                                <a className='footer-link' href='mailto:Info@Brovapes.com'><AiOutlineMail /></a>
                            </div>
                            <Link className='footer-link footer-link_special' to='/Contact'>Contact</Link>

                        </div>

                    </div>
                    <p className='copyright-msg'>&copy; 2023 BROVAPE. All Rights Reserved.</p>
                </div>
                <div className='footer-newletter-section'>
                    <p>Join our newsletter to stay up to date with new products.</p>
                    <form onSubmit={handleSubscribe} className='footer-newletter-flex'>
                        <input ref={emailRef} placeholder='Email' />
                        <button className={(mailStatus === '' || mailStatus === 'loading') ? '' : mailStatus === 'sent' ? 'footer-btn-sent' : 'footer-btn-failed'} type='submit'>{mailStatus === '' ? 'subscribe' : mailStatus === 'loading' ? <ImSpinner8 className="footer-btn-spinner" /> : mailStatus === 'sent' ? 'sent' : 'failed'}</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Footer