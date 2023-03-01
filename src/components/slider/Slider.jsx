import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; 

import styles from "./slider.module.scss";

const Slider = ({ slideWidth, setActiveSlide, children }) => {
   const [offset, setOffset] = useState(0);
   const [isAutoplay, setIsAutoplay] = useState(true);

   const _maxOffset = (children.length - 1) * slideWidth;

   //watching active slide change
   useEffect(() => {
      setActiveSlide(offset / 100 + 1)
   }, [offset, setActiveSlide])

   // Autoplay functionallity
   useEffect(() => {
      let slideInterval;
      const _intervalDuration = 4000;

      if (isAutoplay) {
         slideInterval = setInterval(() => {
            if (offset === _maxOffset) {
               setOffset(0)
            } else {
               setOffset(offset + slideWidth)
            }
         },_intervalDuration)
      }

      return () => clearInterval(slideInterval)
   }, [offset, isAutoplay, _maxOffset, slideWidth, setActiveSlide]);

   const onDotClick = (index) => {
      setOffset(slideWidth * index)
   }

   return (
      <div 
         className={styles.mainContainer} 
         onMouseEnter={() => setIsAutoplay(false)} 
         onMouseLeave={() => setIsAutoplay(true)}
      >
         <ul 
            className={styles.itemsContainer} 
            style={{transform: `translateX(${-offset}%)`}}
         >
            {children}
         </ul>
         
         <div className="container">
            <div className={styles.dots}>
               {children.map((_, i) => (
                  <button 
                     onClick={() => onDotClick(i)} 
                     key={i} 
                     className={`${styles.dot} ${offset === i * 100 ? styles.active : ""}`}
                  ></button>
               ))}
            </div>
         </div>
      </div>
   );
}

Slider.propTypes = {
   slideWidth: PropTypes.number,
   setActiveSlide: PropTypes.func,
   children: PropTypes.array
}

export default Slider;