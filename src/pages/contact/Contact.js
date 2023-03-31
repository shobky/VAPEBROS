import React from 'react'
import './contact.css'
import { RiWhatsappFill } from 'react-icons/ri'
import { BiTimeFive } from 'react-icons/bi'
import { BsArrowUpRight, BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-inner-container'>
                <h1 className='contact-page-header'>Let's get in touch!</h1>
                <div className='contact-info'>
                    <h2>Contact Information</h2>
                    <p className='contact-info-subheader'>Fill out the form and our team will get back to you in 24 hours.</p>
                   <div className='contact-info-inner'>
                   <div className='contact-info-flex'>
                        <BsFillTelephoneFill className='contact-ico'/>
                        <p>+xx (xxx) xxx xxxx</p>
                    </div>
                    <div className='contact-info-flex'>
                        <RiWhatsappFill className='contact-ico'/>
                        <p>+xx (xxx) xxx xxxx</p>
                    </div>
                    <div className='contact-info-flex'>
                       <MdEmail className='contact-ico'/>
                        <p>contact@vapebroos.com</p>
                    </div>
                    <div className='contact-work-timings'>
                        <p className='contact-info-field'><BiTimeFive className='contact-ico'/>Work timing</p>
                      <div className='contact-work-timings'>
                      <p>MON-FRI 9AM-9PM</p>
                        <p>SAT-SUN Closed</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div>
                    <form className='contact-form'>
                        <div className='contact-form-flex'>
                            <div className='contact-form-field'>
                                <label>First Name</label>
                                <input placeholder='' />
                            </div>
                            <div className='contact-form-field'>
                                <label>Last Name</label>
                                <input placeholder='' />
                            </div>
                        </div>
                        <div className='contact-form-flex'>
                            <div className='contact-form-field'>
                                <label>Email</label>
                                <input placeholder='' />
                            </div>
                            <div className='contact-form-field'>
                                <label>Phone Number</label>
                                <input placeholder='' />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea className='contact-message' />
                        <button className='contact-form-btn'>Send Now <BsArrowUpRight/></button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact