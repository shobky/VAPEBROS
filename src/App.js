import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Cookies from 'js-cookie';
import Permit from './components/permit/Permit'
import Nav from './components/nav/Nav'

import { useProducts } from './contexts/ProductsContext';
import { BlogsProvider } from './contexts/BlogsContext';
import Dashboard from './admin/dashboard/Dashboard';


const Home = lazy(() => import('./pages/home/Home'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Wholesale = lazy(() => import('./pages/wholesale/Wholesale'));
const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const NewsLetter = lazy(() => import('./pages/newsLetter/NewsLetter'));
const AddProducts = lazy(() => import('./admin/add-products/AddProducts'));
const ProductPage = lazy(() => import('./pages/product/ProductPage'));
const SimilarProducts = lazy(() => import('./pages/product/SimilarProducts'));
const AddBlogs = lazy(() => import('./admin/add-blogs/AddBlogs'));
const Blogs = lazy(() => import('./pages/blog/Blogs'));
const BlogRoutes = lazy(() => import('./components/blog/BlogRoutes'));


const App = () => {

  const { allProducts } = useProducts()

  const [activePage, setActivePage] = useState('')
  const [legal, setLegal] = useState(true)
  const [nonPermit, setNonPermit] = useState(false)
  const { pathname } = useLocation();

  const [fixed, setFixed] = useState(false);



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


  useEffect(() => {
    if (pathname !== '/') {
      setFixed(true)
      return
    } else {
      setFixed(false)
    }
    function handleScroll() {
      if (window.pageYOffset > window.innerHeight * 0.24) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  let startY; // will hold the starting Y position of the touch

  function handleTouchStart(event) {
    // store the starting Y position of the touch
    startY = event.touches[0].clientY;
  }

  function handleTouchEnd(event) {
    const endY = event.changedTouches[0].clientY; // ending Y position of the touch

    // calculate the distance moved
    const distance = startY - endY;

    // check if the user swiped up or down
    if (distance > 0) {
      // user swiped up
      document.getElementById('navigation').classList.add('nav_scroll');
    } else {
      // user swiped down
      document.getElementById('navigation').classList.remove('nav_scroll');
    }
  }

  function handleScroll(event) {
    // get the direction of the scroll
    const direction = event.deltaY > 0 ? 'up' : 'down';

    // check if the user scrolled up or down
    if (direction === 'up') {
      // user scrolled up
      document.getElementById('navigation').classList.remove('nav_scroll');
    } else {
      // user scrolled down
      document.getElementById('navigation').classList.add('nav_scroll');
    }
  }

  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchend', handleTouchEnd);
  document.addEventListener('wheel', handleScroll);

  return (
    <Suspense fallback={<p>loading..</p>}>
      {!legal &&
        <Permit nonPermit={nonPermit} handleAddCookie={handleAddCookie} />}
      <Nav activePage={activePage} fixed={fixed} handleActivePage={handleActivePage} />
      <div className={pathname === '/' ? "" : "nav-space"}></div>
      <Routes>
        <Route path='' element={<Home fixed={fixed} />} />
        <Route path='/wholesale' element={<Wholesale />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newsLetter' element={<NewsLetter />} />
        <Route path='/disposables' element={<Shop category={'disposables'} />} />
        <Route path='/e-Liquid' element={<Shop category={'e-Liquid'} />} />
        <Route path='/accessories' element={<Shop category={'accessories'} />} />
        {allProducts?.map((product) => (
          <Route key={product.name} path={`/product=${product.name}`} element={
            <div className='product-similar-container'>
              <ProductPage product={product} />
              <SimilarProducts category={activePage} product={product} />
            </div>
          } />
        ))}

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/add-products' element={<AddProducts />} />
        <Route path='/dashboard/add-blogs' element={<AddBlogs />} />
      </Routes>

      <BlogsProvider>
        <Routes>
          <Route path='/blog' element={<Blogs />} />
        </Routes>
        <BlogRoutes />
      </BlogsProvider>

      <Footer />
    </Suspense>

  )
}

export default App