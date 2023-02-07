import { useState, useEffect, Children, cloneElement } from "react";

import styles from "./slider.module.scss";

function Slider({ children }) {
   const [slides, setSlides] = useState([]);
   const [offset, setOffset] = useState(0);
   const [isAutoplay, setIsAutoplay] = useState(true);

   const _slideWidth = 100;
   const _maxOffset = (slides.length - 1) * _slideWidth;

   //Autoplay functionallity
   useEffect(() => {
      let slideInterval;
      const _intervalDuration = 1000;

      if (isAutoplay) {
         slideInterval = setInterval(() => {
            if (offset === _maxOffset) {
               setOffset(0)
            } else {
               setOffset(offset + _slideWidth)
            }
         },_intervalDuration)
      }

      return () => clearInterval(slideInterval)
   }, [offset, isAutoplay, _maxOffset]);

   //Setting slides
   useEffect(() => {
      setSlides(
         Children.map(children, child => {
            return cloneElement(child, {
               style: {
                  height: '100%',
                  maxWidth: `${_slideWidth}%`,
                  minWidth: `${_slideWidth}%`
               }
            })
         })
      )
   }, [children])

   const onDotClick = (index) => {
      setOffset(_slideWidth * index)
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
            {slides}
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

export default Slider;