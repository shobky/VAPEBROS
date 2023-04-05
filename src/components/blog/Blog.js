import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBlogs } from '../../contexts/BlogsContext'
const Blog = ({ blog }) => {
    const navigate = useNavigate()
    const { handleSelectingBlog } = useBlogs()

    return (
        <div onClick={() => navigate(`/blog=${blog.title}`)} className='single-blog-container'>
            <img className='s-blog-img' src={blog.image} alt='' />
            <h2 className='s-blog-name'>{blog.title}</h2>
            <p className='s-blog-desc'>{blog.description.slice(0, 80)}..</p>
            <Link className='s-blog-link' to='/blog=blogname'>Read more</Link>
        </div>
    )
}

export default Blog