import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import { ProductsProvider, useProducts } from './contexts/ProductsContext'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Cookies from 'js-cookie';
import Permit from './components/permit/Permit'
import Wholesale from './pages/wholesale/Wholesale'
import Blogs from './pages/blog/Blogs'
import ReadBlog from './components/blog/ReadBlog'
import About from './pages/about/About'
import AddProducts from './admin/add-products/AddProducts'
import ProductPage from './pages/product/ProductPage'
import SimilarProducts from './pages/product/SimilarProducts'
import Contact from './pages/contact/Contact'
import NewsLetter from './pages/newsLetter/NewsLetter'

const App = () => {

  const { allProducts } = useProducts()

  const [activePage, setActivePage] = useState('')
  const [legal, setLegal] = useState(true)
  const [nonPermit, setNonPermit] = useState(false)

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });;
  }, [pathname]);

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
      activeLink.style.background = 'black'
      activeLink.style.color = 'white'
      return
    }
    document.getElementById('Contact').style.background = ''
    document.getElementById('Contact').style.color = ''
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
        <Route path='/' exact element={<Home />} />
        <Route path='/wholesale' element={<Wholesale />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/blog=blogname' element={<ReadBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newsLetter' element={<NewsLetter />} />

        
        <Route path='/disposables' element={<Shop category={'disposables'} />} />
        <Route path='/e-Liquid' element={<Shop category={'e-Liquid'} />} />
        <Route path='/accessories' element={<Shop category={'accessories'} />} />
        {
          allProducts?.map((product) => (
            <Route path={`/product=${product.name}`} element={
              <div className='product-similar-container'>
                <ProductPage product={product} />
                <SimilarProducts category={activePage} product={product} />
              </div>
            } />
          ))
        }

      </Routes>

      <Routes>
        <Route path='/dashboard/add-products' element={<AddProducts />} />
      </Routes>

      <Footer />


    </>

  )
}

export default App