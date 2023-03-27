import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import { ProductsProvider } from './contexts/ProductsContext'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Cookies from 'js-cookie';
import Permit from './components/permit/Permit'
import Wholesale from './pages/wholesale/Wholesale'
import Blogs from './pages/blog/Blogs'
import ReadBlog from './components/blog/ReadBlog'
import AboutSkele from './components/skeles/AboutSkele'
const About = lazy(() => import('./pages/about/About'))

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
    activeLink.style.fontWeight = 'bold'


    return () => {
      activeLink.style.fontWeight = ''

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
      {
        <div className='nav-space'></div>
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wholesale' element={<Wholesale />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/blog=blogname' element={<ReadBlog />} />
        <Route path='/about' element={
          <Suspense fallback={<AboutSkele />}>
            <About />
          </Suspense>
        } />




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