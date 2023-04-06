import React from 'react'
import { Route, Routes } from 'react-router'
import ReadBlog from './ReadBlog'
import { useBlogs } from '../../contexts/BlogsContext'

const BlogRoutes = () => {
    const { blogsData } = useBlogs()
    return (
        <Routes>
            {
                blogsData?.map((blog, index) => (
                    <Route key={index} path={`blog=${blog.title}`} element={<ReadBlog blog={blog} />} />
                ))
            }
        </Routes>
    )
}

export default BlogRoutes