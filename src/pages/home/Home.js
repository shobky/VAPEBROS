import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import group from '../../assets/pngs/group-ae.png'
import vapes from '../../assets/pngs/vape-ae.png'
const Home = ({ fixed }) => {
  const [big, setBig] = useState(false)


  const animatedImgRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    });

    if (animatedImgRef.current) {
      observer.observe(animatedImgRef.current);
    }

    function handleScroll() {
      if (window.pageYOffset > window.innerHeight * 0.3) {
        setBig(true);
      } else {
        setBig(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);







  return (
    <div
      className='home-container'>
      <section className='home_section1'>
      <div className='hero-content'>
      <h1 className='hero-txt'>Lorem ipsum dolor sit amet.</h1>
        <button>SHOP</button>
      </div>
      <div className='img-container'>
      <img className={big ? 'home-img__big ': 'home-img'} src={group} alt='vapebros' />

      </div>
      </section>

      <section className='home_section2'>
        <div className='home_s2-txt-container'>
          <h2 className='home-s2-text'>Disposables,<div className='s2-text-border'></div></h2>
          <h2 className='home-s2-text'>E-liquids,<div className='s2-text-border'></div></h2>
          <h2 className='home-s2-text'>Accessories & More.<div className='s2-text-border'></div></h2>
          <h2 className='home-s2-text'>Find out<div className='s2-text-border'></div></h2>
        </div>
        <img id='animatedimg' ref={animatedImgRef} src={vapes} className='section-2-img' alt="" />
      </section>
      <section className='home-section3'>
        <h2 className='home-s3-txt'>consectetur in velit. In eu quam a leo tristique ultricies ac sed sapien. Donec turpis turpis, pretium in auctor vitae, sagittis sit amet lacus.</h2>
        <button>Wholesale</button>
      </section>
    </div>
  )
}

export default Home