import React, { useContext, useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore"
import { useLocation } from "react-router"

const ProductsContext = React.createContext()

export const useProducts = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({ children }) => {

    const [isUser, setIsUser] = useState(false)

    const [searchQuery, setSearchQuery] = useState('')

    const [disposables, setDisposables] = useState([]);
    const [eLiquid, setELiquid] = useState([]);
    const [accessories, setAccessories] = useState([]);

    const [allProducts, setAllProdcuts] = useState([])


    const hadnleUser = (user) => {
        setIsUser(user)
    }

    useEffect(() => {
        setAllProdcuts([...disposables, ...eLiquid, ...accessories])
    }, [disposables, eLiquid, accessories])

    const hadnleSearchInput = (q) => {
        setSearchQuery(q)
    }

    const fetchDisposables = async () => {
        let data = []
        const querySnapshot = await getDocs(collection(db, 'disposables'));
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        setDisposables(data)
    };


    const fetchLiquids = async () => {
        let data = []
        const querySnapshot = await getDocs(collection(db, 'e-liquid'));
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        setELiquid(data)

    };

    const fetchAccessories = async () => {
        let data = []
        const querySnapshot = await getDocs(collection(db, 'accessories'));
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        setAccessories(data)

    };

    useEffect(() => {
   
        fetchDisposables()
        fetchLiquids()
        fetchAccessories()
    }, [])
    const value = {
        disposables,
        eLiquid,
        accessories,
        allProducts,
        hadnleSearchInput,
        searchQuery,
        hadnleUser,
        isUser
    }
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}