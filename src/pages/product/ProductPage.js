import React from 'react'
import './product.css'

const ProductPage = ({ product }) => {
    return (
        <div id='px' className='product-page-container'>
            <img className='product-page-img' src={product.image} />
            <div className='product-page-details'>
                <h1>{product.name}</h1>
                <p className='product-page-desc'>{product.description}</p>
                {/* <p className='product-page-puffs'>{product.puffs}</p> */}
                <button>Make inquiry</button>
            </div>
        </div>
    )
}

export default ProductPage