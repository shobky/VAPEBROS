import React from 'react'
import { Route, Routes } from 'react-router'
import AddProducts from '../add-products/AddProducts'
import './dashboard.css'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Routes>
                <Route path='/dashboard/add-products' element={<AddProducts />} />
            </Routes>
        </div>

    )
}

export default Dashboard