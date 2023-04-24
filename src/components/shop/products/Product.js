import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../../../firebase/config'

const Product = ({ product, action, handleGetDeleted }) => {

    const navigate = useNavigate()

    const handleDeleteProject = async () => {
        await deleteDoc(doc(db, product.category, product.name)).catch(err => console.log(err))
        handleGetDeleted(product)
    }

    return (
        <div onClick={() => action !== 'delete' && navigate(`/product=${product.name}`)} className='products_product-container'>
            {product.image &&
                <div className='products-img-background'>
                    <img src={product.image} className='products_product-img' alt={product.name} />
                </div>}
            <p className='products_product-name'>{product.name}</p>
            <p className='products_product-desc'>{product.description}</p>
            {
                action === 'delete' ?
                    <button onClick={() => handleDeleteProject()} className='products_product-btn'>Delete</button> :
                    <Link to={`/product=${product.name}`} className='products_product-btn'>View</Link>
            }
        </div>
    )
}

export default Product