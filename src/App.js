import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import { ProductsProvider } from './contexts/ProductsContext'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Cookies from 'js-cookie';
import Permit from './components/permit/Permit'

const App = () => {
  const [activePage, setActivePage] = useState('')
  const [legal, setLegal] = useState(true)
  const [nonPermit, setNonPermit] = useState(false)
  const handleAddCookie = (value) => {
    setLegal(value)
    setNonPermit(!value)
  }

  useEffect(() => {
    const cookieValue = Cookies.get('avove18');
    if (cookieValue) {
      // Cookie is present, run your if statement here
      // ...
      if (cookieValue === 'yes') {
        setLegal(true)
        return
      } else {
        setNonPermit(true)
        setLegal(false)
      }
    } else {
      setTimeout(() => {
        setLegal(false)
      }, 100);
    }
  }, [legal]);

  useEffect(() => {
    if (!activePage) {
      return
    }
    const activeLink = document.getElementById(activePage)
    if (activePage === 'Contact') {
      return
    }
    activeLink.style.opacity = .5
    return () => {
      activeLink.style.opacity = '';

    };
  }, [activePage]);

  const handleActivePage = (page) => {
    setActivePage(page)

  }
  return (
    <>
      {!legal &&
        < Permit nonPermit={nonPermit} handleAddCookie={handleAddCookie} />}
      <Nav handleActivePage={handleActivePage} activeLink={activePage} />
      <br />
      <br />
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <ProductsProvider>
        <Routes>
          <Route path='/disposables' element={<Shop category={'disposables'} />} />
          <Route path='/e-Liquid' element={<Shop category={'e-Liquid'} />} />
          <Route path='/accessories' element={<Shop category={'accessories'} />} />

          {/* <Route path='/product' element={<ProductPage />} /> */}


        </Routes>
      </ProductsProvider>

      <Footer />
    </>

  )
}

export default App