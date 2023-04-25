import React, { useContext, useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore"
import { useLocation } from "react-router"
import { useCollectionData } from "react-firebase-hooks/firestore"

const BlogsContext = React.createContext()

export const useBlogs = () => {
    return useContext(BlogsContext)
}

export const BlogsProvider = ({ children }) => {

   
    const blogq = collection(db, `blogs`)
    const [blogsData, laodingBlogs] = useCollectionData(blogq)


    const value = {
        blogsData,
        laodingBlogs,

    }
    return (
        <BlogsContext.Provider value={value}>
            {children}
        </BlogsContext.Provider>
    )
}