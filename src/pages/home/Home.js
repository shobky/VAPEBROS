import React, { useEffect, useState } from 'react'
import group from '../../assets/pngs/My project-min.png'
import vapes from '../../assets/pngs/vapes.jpg'
import './home.css'
const Home = ({ fixed }) => {
  const [big, setBig] = useState(false)

  useEffect(() => {
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
        <h1 className='home_header'>VAPEBROS</h1>
        <img className={big ? 'home-img__big' : 'home-img'} src={group} alt='vapebros' />
      </section>
      <section className='home_section2'>
        <div className='home_s2-txt-container'>
          <h2 className='home-s2-text'>Disposables,<div className='s2-text-border'></div></h2>
          <h2 className='home-s2-text'>E-liquids,<div className='s2-text-border'></div></h2>
          <h2 className='home-s2-text'>Accessories & More.<div className='s2-text-border'></div></h2>
          <h2 className='home-s2-text'>Find out<div className='s2-text-border'></div></h2>
        </div>
        <img src={vapes} className='section-2-img'/>
      </section>
    </div>
  )
}

export default Home