import React  from 'react'
import Product from './Product'
import './styles.css'
import { useProducts } from '../../../contexts/ProductsContext'

const Liqu = () => {
    const {
        eLiquid
    } = useProducts()


    return (
        <div className='prodcuts-container'>
            {
                eLiquid?.map((product, index) => (
                    <Product key={index} product={product} />
                ))
            }
        </div>
    )
}

export default Liqu