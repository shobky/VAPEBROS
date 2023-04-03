import React, { useState } from 'react'
import NameIt from '../../components/newsLetter/NameIt'
import './newsletter.css'
import { PickFlavor } from '../../components/newsLetter/PickFlavor'
import CustomForm from '../../components/newsLetter/CustomForm'

const NewsLetter = () => {
    const [name, setName] = useState('')
    const [flavors, setFlavors] = useState([])

    const handleName = (n) => {
        setName(n)
    }

    const handleFlavor = (f) => {
        setFlavors(f)
    }
    return (
        <div className='news-letter-container'>
            <NameIt handleName={handleName} />
            <PickFlavor handleFlavor={handleFlavor} />
            <CustomForm name={name} flavors={flavors} />
        </div>
    )
}

export default NewsLetter