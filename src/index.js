import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './admin/dashboard/Dashboard';
import { ProductsProvider } from './contexts/ProductsContext';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </BrowserRouter>
    </React.StrictMode>
)