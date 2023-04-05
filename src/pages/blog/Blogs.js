import React from 'react'
import Blog from '../../components/blog/Blog'
import './blog.css'
import { useBlogs } from '../../contexts/BlogsContext'
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader'

const Blogs = () => {


  const { blogsData, laodingBlogs } = useBlogs()

  return (
    <>
      {laodingBlogs && <SpinnerLoader loading={laodingBlogs} />}

      <div className='blogs-container'>
        <h1 className='blogs-header'>Blogs</h1>
        <div className='blogs-inner-container'>

          {
            blogsData?.map((blog) => (
              <>
                <Blog blog={blog} />
              </>

            ))
          }
        </div>
      </div></>
  )
}

export default Blogs