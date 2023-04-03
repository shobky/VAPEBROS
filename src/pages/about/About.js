import React from 'react'
import './about.css'
import about1 from '../../assets/about1.webp'
import about2 from '../../assets/about2.webp'
import about3 from '../../assets/about3.webp'
import about4 from '../../assets/about4.webp'
import about5 from '../../assets/about5.webp'
import liquid1 from '../../assets/liquid1.webp'
import liquid2 from '../../assets/liquid2.webp'
import liquid3 from '../../assets/liquid3.webp'
import LazyImage from '../../components/LazyImage'



const About = () => {

    return (
        <div className='about'>
            <section className='about-section1'>
                <div>
                    <h1>About the brand</h1>
                    <article className='about-us-article'>
                        <p>  Vivamus sagittis purus risus. Integer condimentum, est quis tristique pretium, augue enim semper erat, mollis porta ipsum est id eros. Ut magna ex, bibendum quis euismod id, iaculis vitae urna. Etiam porta metus ac scelerisque bibendum. Morbi vestibulum consequat purus in euismod. Aenean ac scelerisque sem, at vulputate est.
                        </p>
                    </article>
                </div>
                <div className='about-img1-skele'>
                    <LazyImage alt='' className="about-img1" src={about1} />
                </div>
            </section>


            <section className='about-section2'>
                <div className='associate-floating-container a-f-top-left'>
                    <div className='a-f-img-skeleLoader'>
                        <LazyImage src={about2} className='a-f-img' alt='' />

                    </div>
                    <p className='a-f-text'>In hac habitasse platea dictumst.</p>

                </div>
                <div className='associate-floating-container a-f-top-right'>
                    <div className='a-f-img-skeleLoader'>
                        <LazyImage src={about3} className='a-f-img' alt='' />

                    </div>
                    <p className='a-f-text'>laoreet ac dui. </p>
                </div>
                <h1 className='about-s2-h'>How we associate with fashion</h1>
                <div className='associate-floating-container a-f-bottom'>
                    <div className='a-f-img-skeleLoader'>
                        <LazyImage src={about4} className='a-f-img a-f-img-bottom' alt='' />

                    </div>
                    <p className='a-f-text'>fermentum vitae mattis quis.</p>
                </div>

            </section>

            <section className='about-section3'>
                <article className='about-section3-texts'> <h1>About the liquid</h1>
                    <p className='about-s3-article'>dignissim in turpis at, placerat consectetur felis. Cras a velit lobortis, pellentesque eros vel, ornare lectus.</p>
                </article>
                <LazyImage src={about5} alt="" className='about-mobile-photo' />

            </section>
            <section className='about-section4'>
                <h1>Our liquid process</h1>
                <p className='about-s4-article'>dignissim in turpis at, mollis volutpat libero malesuada id. Vivamus sagittis purus risus.</p>
                <div className='about-s4-imgs'>
                    <div className='about-section4-img-skeleloader'>
                        <LazyImage src={liquid1} alt="" className="about-section4-img" />
                    </div>
                    <div className='about-section4-img-skeleloader'>
                        <LazyImage src={liquid2} alt="" className="about-section4-img" />
                    </div>
                    <div className='about-section4-img-skeleloader'>
                        <LazyImage src={liquid3} alt="" className="about-section4-img" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About