import React, { useContext, useState } from "react"

const ProductsContext = React.createContext()

export const useProducts = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState('shop')


    const value = {
        products
    }
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}