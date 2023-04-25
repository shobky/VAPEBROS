import React from 'react'
import CountrySelect from './CountrySelect'
import './wholesale.css'
import macdo from '../../assets/logo_dark_t.png'
const Wholesale = () => {
    return (
        <div className='wholesale'>
            <section className='section1'>
                <h1 className='wholesale-head'>Lorem ipsum dolor</h1>
                <div className='whlesale-article'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a finibus mi, porta tristique orci.</p>
                    <p>Fusce vel risus in ligula varius eleifend id sit amet libero. Cras efficitur fringilla sem, ullamcorper ultricies felis efficitur vel. Donec lobortis faucibus hendrerit. Nam ac quam dolor. </p>
                </div>
            </section>
            <section className='section2'>
                <h1 className='wholesale-head'>Our Partners</h1>
                <div className='partners-container'>
                    <div className='partners-partner-container'>
                        <h2>Malaysia</h2>
                        <p>
                            Suite 11.01B, Level 11,
                            The Gardens South Tower,
                            Mid Valley City, Lingkaran Syed Putra,
                            59200 Kuala Lumpur
                        </p>
                        <div className='partners-partner-contact'>
                            <a target='blank' href='https://www.broasia.com '> www.broasia.com </a>
                            <p><a target='blank' href="tel:+60178188651">017-8188651</a></p>
                            <p><a target='blank' href="mailto:official@broasia.com">official@broasia.com</a></p>
                        </div>
                        <img className='partners-logo' alt='logo' src={macdo}/>
                    </div>
                    <div className='partners-partner-container'>
                        <h2>Macedonia</h2>
                        <p>Tetovo-North Macedonia</p>
                        <div className='partners-partner-contact'>
                            <a target='blank' href='https://www.trokaderofm.com'>www.trokaderofm.com</a>
                            <p><a target='blank' href="tel:+38944355955">+38944355955</a></p>
                            <p><a target='blank' href="mailto:info@trokaderofm.com">info@trokaderofm.com</a></p>
                        </div>
                        <img className='partners-logo' alt='logo' src={macdo}/>
                    </div>

                </div>
            </section>
            <section className='sectoin3'>
                <h1 className='wholesale-head'>Get in touch for wholesale</h1>
                <div className='form-contaienr'>
                    <form>
                        <div className='form-inner-flex'>
                            <div className='form-inner-flex-section'>
                                <label className='wholesale-label'>Name</label>
                                <input placeholder='' className='wholesale-input' />
                            </div>
                            <div className='form-inner-flex-section'>
                                <label className='wholesale-label'>Email</label>
                                <input placeholder='' className='wholesale-input' />
                            </div>
                        </div>
                        <div className='form-inner-flex'>
                            <div className='form-inner-flex-section'>
                                <label className='wholesale-label'>Phone number</label>
                                <input placeholder='' className='wholesale-input' />
                            </div>
                            <div className='form-inner-flex-section'>
                                <label className='wholesale-label'>Country</label>
                                <CountrySelect />
                            </div>
                        </div>
                        <label className='wholesale-label'>Message</label>
                        <textarea placeholder='' className='wholesale-input wholesale-input_textarea' />

                        <button className='wholesale-from-btn'>Get a call</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Wholesale