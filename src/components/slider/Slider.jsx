import { useState, useEffect, Children, cloneElement } from "react";

import styles from "./slider.module.scss";

function Slider({ children }) {
   const [slides, setSlides] = useState([]);
   const [offset, setOffset] = useState(0);

   const _slideWidth = 100;
   const _maxOffset = (slides.length - 1) * _slideWidth;

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

   useEffect(() => {
      const timer = setTimeout(() => {
         if (offset === _maxOffset) {
            setOffset(0)
         } else {
            setOffset(offset + _slideWidth)
         }
      }, 5000);
      return () => clearTimeout(timer)
   });

   const onDotClick = (index) => {
      setOffset(_slideWidth * index)
   }

   return (
      <div className={styles.mainContainer}>
         <ul className={styles.itemsContainer} style={{transform: `translateX(${-offset}%)`}}>
            {slides}
         </ul>
         
         <div className="container">
            <div className={styles.dots}>
               {children.map((_, i) => <button onClick={() => onDotClick(i)} key={i} className={`${styles.dot} ${offset === i * 100 ? styles.active : ""}`}></button>)}
            </div>
         </div>
      </div>
   );
}

export default Slider;