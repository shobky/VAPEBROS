import React, { useState, useEffect, useRef } from 'react';
import lqLoader from '../assets/lqLoader.webp'

const LazyImage = (props) => {
    const [loaded, setLoaded] = useState({});
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the image is in the viewport, load it
                if (entry.isIntersecting) {
                    setLoaded({ ...loaded, [props.src]: true });
                }
            },
            {
                rootMargin: '0px 0px 100px 0px',
            }
        );

        observer.observe(imgRef.current);

        // Remove the observer when the component is unmounted
        // return () => {
        //     observer.unobserve(imgRef.current);
        // };
    }, [loaded, props.src]);


    return (
        <img
            className={props.className}
            src={loaded[props.src] ? props.src : lqLoader}
            ref={imgRef}
            alt={props.alt}
        />
    )
}

export default LazyImage