import React from 'react'
import './spinnerLoader.css'

const SpinnerLoader = ({ loading }) => {
    return (
        <div>
            {
                loading && <div className='loading-blogs-container'><div className='loader-spinner'></div></div>
            }
        </div>
    )
}

export default SpinnerLoader