import React from 'react'
import Product from './Product'
import './styles.css'
import { useProducts } from '../../../contexts/ProductsContext'

const Dispo = () => {
    const {
        accessories,
        searchQuery
    } = useProducts()

    return (
        <div className='prodcuts-container'>
            {
                accessories?.filter((f) => {
                    if (searchQuery === '') {
                        return f
                    }
                    else if (f.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                        return f
                    } else if (f.puffs === searchQuery) {
                        return f
                    } else {

                    }
                }).map((product, index) => (
                    <Product key={index} product={product} />
                ))
            }
        </div>
    )
}

export default Dispo