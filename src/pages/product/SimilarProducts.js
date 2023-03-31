import React, { useEffect, useState } from 'react'
import { useProducts } from '../../contexts/ProductsContext'
import Product from '../../components/shop/products/Product'

const SimilarProducts = ({ product }) => {
    const {
        disposables,
        eLiquid,
        accessories,
    } = useProducts()


    const similarProductsArray =
        product.category === "disposables" ? disposables.filter((f) => f.name !== product.name).slice(0, 4) :
            product.category === "e-liquid" ? eLiquid.filter((f) => f.name !== product.name).slice(0, 4) :
                product.category === 'accessories' ? accessories.filter((f) => f.name !== product.name).slice(0, 4) :
                    []
    return (
        <div id='555' className='similar-products-container'>
            <h2>Similar products</h2>
            <div className='similar-products-map'>
                {
                    similarProductsArray?.length >= 1 ? similarProductsArray.map((product) => (
                        <Product product={product} />
                    ))
                        :
                        <p className='similar-products-err-msg'>There is no similar products to tihs product.</p>
                }
            </div>
        </div>
    )
}

export default SimilarProducts