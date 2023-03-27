import React from 'react'

const AboutSkele = () => {
  return (
    <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8vw", margin: ' 22vh 5vw' }} className='about-skele-container'>
      <div style={{ height: "30px", width: "70%", backgroundColor: "gray", animation: 'skeleLoader .5s infinite alternate' }} className='about-skele-h1'></div>
      <div style={{ height: "200px", width: "90%", backgroundColor: "gray", animation: 'skeleLoader .5s infinite alternate' }} className='about-skele-p'></div>
      <div style={{ height: "400px", width: "90%", backgroundColor: "gray", animation: 'skeleLoader .5s infinite alternate' }} className='about-skele-img'></div>
    </div>
  )
}

export default AboutSkele