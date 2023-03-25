import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className='products_product-container'>
            <div className='products_product-img'></div>
            <p className='products_product-name'>Product</p>
            <p className='products_product-desc'>This is the product description</p>
            <Link to={'/product'} className='products_product-btn'>View</Link>
        </div>
    )
}

export default Product