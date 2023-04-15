import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

export const PickFlavor = ({ handleFlavor }) => {
    const [selectedFlavors, setSelectedFlavors] = useState([])

    useEffect(() => {
        handleFlavor(selectedFlavors)
        console.log(selectedFlavors)
    }, [selectedFlavors])

    const handleFlavorSelection = (flavor) => {
        const index = selectedFlavors.findIndex((f) => f.id === flavor.id);
    
        if (index === -1) {
            // Flavor was not already selected, so add it to the array
            if (selectedFlavors.length < 4) {
                setSelectedFlavors([...selectedFlavors, flavor]);
            }
        } else {
            // Flavor was already selected, so remove it from the array
            const updatedSelectedFlavors = [...selectedFlavors];
            updatedSelectedFlavors.splice(index, 1);
            setSelectedFlavors(updatedSelectedFlavors);
        }
    };

    const flavors = [
        { id: 1, name: "Banana", color: '#FFE135' },
        { id: 2, name: "Blueberry", color: '#4F86F7' },
        { id: 3, name: "Watermelon", color: '#F26C6C' },
        { id: 4, name: "Sweet Melon", color: '#F1C40F' },
        { id: 5, name: "Grape", color: '#6A5ACD' },
        { id: 6, name: "Gum Mint", color: '#00FF7F' },
        { id: 7, name: "Passion Fruit", color: '#FF69B4' },
        { id: 8, name: "Mint", color: '#2E8B57' },
        { id: 9, name: "Guava", color: '#FFA07A' },
        { id: 10, name: "Mixed Berries", color: '#B22222' },
        { id: 11, name: "Mango", color: '#FF8C00' },
        { id: 12, name: "Bubble Gum", color: '#FFC0CB' },
        { id: 13, name: "Champagne", color: '#F5DEB3' },
        { id: 14, name: "Cappuccino", color: '#A0522D' },
        { id: 15, name: "Tobacco", color: '#8B4513' },
        { id: 16, name: "Orange", color: '#FFA500' },
        { id: 17, name: "Double Apple", color: '#228B22' },
        { id: 18, name: "Strawberry", color: '#FF1493' },
        { id: 19, name: "Lemon", color: '#FFFF00' },
        { id: 20, name: "Bean Milk", color: '#F5DEB3' },
        { id: 21, name: "Pineapple", color: '#FFE4B5' },
        { id: 22, name: "Caramel Tobacco", color: '#D2B48C' },
    ];


    const handleFlavorClick = (flavor) => {
        handleFlavorSelection(flavor);
    };

    const FinishPicking = () => {
        if (selectedFlavors.length <= 1) {
            document.getElementById('pick-header').classList.add('pick-header-err')
        } else {
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
                   const isSelected = selectedFlavors.find((f) => f.id === flavor.id);
                    const className = isSelected ? 'flavor active' : 'flavor'

                    return (
                        <div
                            key={flavor.id}
                            className={`${className} flavor-${flavor.name}`}
                            style={{ backgroundColor: flavor.color }}
                            onClick={() => handleFlavorClick(flavor)}
                        ><p>{flavor.name}</p></div>
                    )
                })}
            </div>
            <button onClick={FinishPicking} className='newletter-btn'>Next</button>

        </div>
    )
}
