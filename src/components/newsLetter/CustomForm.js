import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const CustomForm = ({ name, flavors }) => {
    const handleGetBack = () => {
        document.getElementById('pick').classList.remove('hidden')
        document.getElementById('customForm').classList.remove('show')
    }
    return (
        <div id='customForm' className='custom-form-container'>
            <MdKeyboardArrowUp onClick={handleGetBack} className='newletter-ico' />
            <h1>{name}</h1>
            <div className='form-flavors-view'>
                {flavors.map((flavor) => (
                    <div className={`flavor`} style={{ background: flavor }}>
                    </div>
                ))}
            </div>
            <form className='custom-form_form-container'>
                <input placeholder='Name' />
                <input placeholder='Phone number' />
                <input placeholder='Email' />
                <button className='newletter-btn'>Add you flavor</button>


            </form>

        </div>
    )
}

export default CustomForm