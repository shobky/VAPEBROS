import React from 'react'
import Categories from '../../components/shop/categories/Categories'
import Products from '../../components/shop/products/Products'
import { useProducts } from '../../contexts/ProductsContext'
import './shop.css'

const Shop = ({ category}) => {
    const { products } = useProducts()
    return (
        <div className='shop-container'>
            <Categories category={category}/>
            <Products category={category} />
        </div>
    )
}

export default Shop