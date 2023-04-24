import React, { useEffect, useState } from 'react'
import { useProducts } from '../../contexts/ProductsContext'
import { useBlogs } from '../../contexts/BlogsContext'
import Product from '../../components/shop/products/Product'
import '../../components/shop/products/styles.css'
import '../../pages/blog/blog.css'
import './styles.css'
import Blog from '../../components/blog/Blog'

const DeleteData = ({ data }) => {
    const { allProducts } = useProducts()
    const { blogsData } = useBlogs()

    const [products, setProducts] = useState([])
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])

    const handleGetDeleted = (doc) => {
        if (data === 'product') {
            setProducts(products.filter(product => product.name !== doc.name))
        } else {
            setBlogs(blogs.filter(blog => blog.name !== doc.name))
        }
    }

    return (
        <div>
            {
                data === 'product' ?
                    <div className='dashboard-product-container'>
                        {
                            products?.map((product) => (
                                <Product
                                    action={'delete'}
                                    product={product}
                                    handleGetDeleted={handleGetDeleted} />
                            ))
                        }
                    </div>
                    :
                    <div className='dashboard-blogs-container'>
                        {
                            blogsData?.map((blog) => (
                                <Blog
                                    blog={blog}
                                    action={'delete'}
                                    handleGetDeleted={handleGetDeleted} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default DeleteData