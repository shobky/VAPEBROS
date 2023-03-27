import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Blog = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/blog=blogname')} className='single-blog-container'>
            <div className='s-blog-img'></div>
            <h2 className='s-blog-name'>Blog Name</h2>
            <p className='s-blog-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a finibus mi, porta tristique orci.</p>
            <Link className='s-blog-link' to='/blog=blogname'>Read more</Link>
          
        </div>
    )
}

export default Blog