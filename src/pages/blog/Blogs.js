import React from 'react'
import Blog from '../../components/blog/Blog'
import './blog.css'
import { useBlogs } from '../../contexts/BlogsContext'
import SpinnerLoader from '../../components/spinnerLoader/SpinnerLoader'

const Blogs = ({ handleBlogSearch, searchQ }) => {


  const { blogsData, laodingBlogs } = useBlogs()

  return (
    <>
      {laodingBlogs && <SpinnerLoader loading={laodingBlogs} />}

      <div className='blogs-container'>
        <div className='blogs-header-contaienr'>
          <input onChange={(e) => handleBlogSearch(e.target.value)} className='blogs-search-for-mobile' placeholder='search...' />
        </div>
        <div className='blogs-inner-container'>

          {
            blogsData?.filter((f) => {
              if (searchQ === '') {
                return f
              } else if (f.title.toLowerCase().includes(searchQ?.toLowerCase())) {
                return f
              } else {

              }
            }).map((blog) => (
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