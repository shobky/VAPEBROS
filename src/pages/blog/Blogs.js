import React from 'react'
import Blog from '../../components/blog/Blog'
import './blog.css'

const Blogs = () => {
  return (
    <div className='blogs-container'>
      <h1 className='blogs-header'>Blogs</h1>
      <div className='blogs-inner-container'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />

      </div>
    </div>
  )
}

export default Blogs