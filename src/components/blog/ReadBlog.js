import React from 'react'
import './readblog.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useBlogs } from '../../contexts/BlogsContext'
import SpinnerLoader from '../spinnerLoader/SpinnerLoader'

const ReadBlog = ({ blog }) => {
    const { laodingBlogs, bloga } = useBlogs()

    return (
        <>
            {laodingBlogs && <SpinnerLoader loading={laodingBlogs}/>}
            {blog &&
                <div className='read-blog'>
                    <section className='read-blog-title'>
                        <img src={blog.image} alt='' className='read-blog-img' />

                        <div>
                            <h2 className='read-blog-name'>{blog.title}</h2>
                            <p className='read-blog-desc'>{blog.description}</p>
                        </div>
                    </section>
                    <article>
                        {blog.article}
                    </article>
                    <div className='read-blog-nav-links'>
                        <Link className='read-blog-link back' to='/blog=blogname'> <IoIosArrowBack className='read-blog-link-ico' />Back</Link>
                        <Link className='read-blog-link next' to='/blog=blogname'>Next<IoIosArrowForward className='read-blog-link-ico' /></Link>
                    </div>
                </div>
            }</>
    )
}

export default ReadBlog