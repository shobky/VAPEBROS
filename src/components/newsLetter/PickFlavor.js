import React, { useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

export const PickFlavor = ({ handleFlavor }) => {
    const [selectedFlavors, setSelectedFlavors] = useState([])

    const handleFlavorSelection = (flavor) => {
        const index = selectedFlavors.indexOf(flavor)

        if (index === -1) {
            // Flavor was not already selected, so add it to the array
            if (selectedFlavors.length < 4) {
                setSelectedFlavors([...selectedFlavors, flavor])
            }
        } else {
            // Flavor was already selected, so remove it from the array
            const updatedSelectedFlavors = [...selectedFlavors]
            updatedSelectedFlavors.splice(index, 1)
            setSelectedFlavors(updatedSelectedFlavors)
        }
    }

    const flavors = [
        { id: 1, name: 'Chocolate' },
        { id: 2, name: 'Vanilla' },
        { id: 3, name: 'Strawberry' },
        { id: 4, name: 'Mint Chocolate Chip' },
        { id: 5, name: 'Cookies and Cream' },
        { id: 6, name: 'Butter Pecan' },
        { id: 7, name: 'Rocky Road' },
        { id: 8, name: 'Pistachio' },
        { id: 9, name: 'Coffee' },
        { id: 10, name: 'Mango' },
        { id: 11, name: 'Peach' },
        { id: 12, name: 'Passion Fruit' },
        { id: 13, name: 'Lemon' },
        { id: 14, name: 'Blueberry' },
        { id: 15, name: 'Raspberry' },
        { id: 16, name: 'Matcha' },
        { id: 17, name: 'Red Bean' },
        { id: 18, name: 'Coconut' },
    ]

    const handleFlavorClick = (flavor) => {
        handleFlavorSelection(flavor.name)
    }

    const FinishPicking = () => {
        document.getElementById('pick').classList.add('hidden')
        document.getElementById('customForm').classList.add('show')

    }
    const handleGetBack = () => {
        document.getElementById('name').classList.remove('hidden')
        document.getElementById('pick').classList.remove('show')
    }
    return (
        <div id='pick' className='pick-flavor-container'>
            <MdKeyboardArrowUp onClick={handleGetBack} className='newletter-ico'/>
            <h1>
                Pick your flavors, <br /> <span>You can choose up to 4 flavors.</span>
            </h1>
            <div className='flavors-container'>
                {flavors.map((flavor) => {
                    const isSelected = selectedFlavors.includes(flavor.name)
                    const className = isSelected ? 'flavor active' : 'flavor'

                    return (
                        <div
                            key={flavor.id}
                            className={className}
                            onClick={() => handleFlavorClick(flavor)}
                        ></div>
                    )
                })}
            </div>
            <button onClick={FinishPicking} className='newletter-btn'>Next</button>

        </div>
    )
}
