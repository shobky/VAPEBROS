import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBlogs } from '../../contexts/BlogsContext'
import { useProducts } from '../../contexts/ProductsContext'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
const Blog = ({ blog, action }) => {
    const navigate = useNavigate()
    const { handleSelectingBlog } = useBlogs()
    const { handleGetDeleted } = useProducts()

    const handleDeleteBlog = async () => {
        await deleteDoc(doc(db, blog.category, blog.name)).catch(err => console.log(err))
        handleGetDeleted(blog)
    }

    return (
        <div onClick={() => action !== 'delete' && navigate(`/blog=${blog.title}`)} className='single-blog-container'>
            <img className='s-blog-img' src={blog.image} alt='' />
            <h2 className='s-blog-name'>{blog.title}</h2>
            <p className='s-blog-desc'>{blog.description.slice(0, 80)}..</p>
            {
                action === 'delete' ?
                    <button onClick={() => handleDeleteBlog()} className='blog-delete-btn'>Delete</button>
                    :
                    <Link className='s-blog-link' to='/blog=blogname'>Read more</Link>

            }
        </div>
    )
}

export default Blog