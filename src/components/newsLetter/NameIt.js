import React from 'react'

const NameIt = ({ handleName }) => {
    const pickFlavor = (e) => {
        e.preventDefault()
        document.getElementById('name').classList.add('hidden')
        document.getElementById('pick').classList.add('show')

    }
    return (
        <div id='name' className='name-it-contaienr'>
            <h1>Create you own custom vape flavor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a finibus mi, porta tristique</p>
            <form onSubmit={pickFlavor} className='name-it-form'>
                <input onChange={(e) => handleName(e.target.value)} required className='wholesale-name-input' placeholder='FLAVOR NAME' />
                <button type='submit' className='newletter-btn'>Next</button>
            </form>
        </div>
    )
}

export default NameIt