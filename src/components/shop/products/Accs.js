import React from 'react'
import Product from './Product'
import './styles.css'
import { useProducts } from '../../../contexts/ProductsContext'

const Dispo = () => {
    const {
        accessories,
    } = useProducts()

    return (
        <div className='prodcuts-container'>
            {
                accessories?.map((product, index) => (
                    <Product key={index} product={product} />
                ))
            }
        </div>
    )
}

export default Dispo