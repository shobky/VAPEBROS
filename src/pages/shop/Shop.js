import React from 'react'
import Categories from '../../components/shop/categories/Categories'
import { useProducts } from '../../contexts/ProductsContext'
import './shop.css'
import Dispo from '../../components/shop/products/Dispo'
import Liqu from '../../components/shop/products/Liqu'

const Shop = ({ category }) => {
    const { products } = useProducts()
    return (
        <div className='shop-container'>
            <Categories category={category} />
            {
                category === 'disposables' ?
                    <Dispo /> : <Liqu />
            }
        </div>
    )
}

export default Shop