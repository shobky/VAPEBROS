import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

export const PickFlavor = ({ handleFlavor }) => {
    const [selectedFlavors, setSelectedFlavors] = useState([])

    useEffect(() => {
        handleFlavor(selectedFlavors)
    }, [selectedFlavors])

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
        { id: 1, name: 'red' },
        { id: 2, name: 'orange' },
        { id: 3, name: 'yellow' },
        { id: 4, name: 'green' },
        { id: 5, name: 'blue' },
        { id: 6, name: 'purple' },
        { id: 7, name: 'pink' },
        { id: 8, name: 'brown' },
        { id: 9, name: 'gray' },
        { id: 10, name: 'black' },
        { id: 11, name: 'light-blue' },
        { id: 12, name: 'beige' },
        { id: 13, name: 'navy' },
        { id: 14, name: 'teal' },
        { id: 15, name: 'maroon' },
        { id: 16, name: 'lavender' },
        { id: 17, name: 'olive' },
        { id: 18, name: 'magenta' },
      ];
      

    const handleFlavorClick = (flavor) => {
        handleFlavorSelection(flavor.name)
    }

    const FinishPicking = () => {
        if (selectedFlavors.length <= 1) {
            document.getElementById('pick-header').classList.add('pick-header-err')
        }else {
            document.getElementById('pick-header').classList.remove('pick-header-err')
            document.getElementById('pick').classList.add('hidden')
            document.getElementById('customForm').classList.add('show')
        }
    }
    const handleGetBack = () => {
        document.getElementById('name').classList.remove('hidden')
        document.getElementById('pick').classList.remove('show')
    }
    return (
        <div id='pick' className='pick-flavor-container'>
            <MdKeyboardArrowUp onClick={handleGetBack} className='newletter-ico' />
            <h1 className='pick-header' >
                <span className='pick-header' id='pick-header'> Pick your flavors,</span> <br /> <span>You can choose up to 4 flavors.</span>
            </h1>
            <div className='flavors-container'>
                {flavors.map((flavor) => {
                    const isSelected = selectedFlavors.includes(flavor.name)
                    const className = isSelected ? 'flavor active' : 'flavor'

                    return (
                        <div
                            key={flavor.id}
                            className={ `${className} flavor-${flavor.name}`}
                            onClick={() => handleFlavorClick(flavor)}
                        ></div>
                    )
                })}
            </div>
            <button onClick={FinishPicking} className='newletter-btn'>Next</button>

        </div>
    )
}
