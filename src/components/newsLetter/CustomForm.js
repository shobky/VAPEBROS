import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const CustomForm = () => {
    const handleGetBack = () => {
        document.getElementById('pick').classList.remove('hidden')
        document.getElementById('customForm').classList.remove('show')
    }
    return (
        <div id='customForm' className='custom-form-container'>
            <MdKeyboardArrowUp onClick={handleGetBack} className='newletter-ico' />
            <h1>
                background-color: beige;
            </h1>
            {/* <button onClick={FinishPicking} className='newletter-btn'>Next</button> */}

        </div>
    )
}

export default CustomForm