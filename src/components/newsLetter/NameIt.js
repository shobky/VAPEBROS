import React from 'react'

const NameIt = () => {
    const pickFlavor = () => {
        document.getElementById('name').classList.add('hidden')
        document.getElementById('pick').classList.add('show')

    }
    return (
        <div id='name' className='name-it-contaienr'>
            <h1>Create you own custom vape flavor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a finibus mi, porta tristique</p>
            <input className='wholesale-name-input' placeholder='FLAVOR NAME' />
            <button onClick={pickFlavor} className='newletter-btn'>Next</button>
        </div>
    )
}

export default NameIt