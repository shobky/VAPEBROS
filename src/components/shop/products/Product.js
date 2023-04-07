import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/product=${product.name}`)} className='products_product-container'>
            {product.image &&
                <div className='products-img-background'>
                    <img src={product.image} className='products_product-img' alt={product.name} />
                </div>}
            <p className='products_product-name'>{product.name}</p>
            <p className='products_product-desc'>{product.description}</p>
            <Link to={`/product=${product.name}`} className='products_product-btn'>View</Link>
        </div>
    )
}

export default Product