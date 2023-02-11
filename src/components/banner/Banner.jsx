import { useState } from 'react';

import MainButton from '../mainButton/MainButton';
import Slider from '../slider/Slider';

import styles from './banner.module.scss';
import '../../assets/style/animations.scss';

function Banner() {
   const [activeSlide, setActiveSlide] = useState(1);

   return (
      <div className={styles.banner}>
         <Slider slideWidth={100} setActiveSlide={setActiveSlide}>
                  <li className={`${styles.slide} ${styles.slide1} ${activeSlide === 1 ? styles.active : ''}`}>
                     <div className="container">
                        <div className={styles.slideInner}>
                           <div>
                              <p className={styles.slideTitle}>Книги, которые <br /> вам хочется слушать</p>
                              <p className={styles.slideText}>
                                 Лучшая подборка аудиокниг по психологиии саморазвитию за все годы издательства...
                              </p>
                           </div>
                           <MainButton 
                              value="Выбрать книгу"
                              size="huge"
                              type="fullOrange"    
                              style={activeSlide === 1 ? {animation: "appear 1s .2s forwards", opacity: "0"} : {}}      
                           />
                        </div>
                     </div>
                  </li>
                  <li className={`${styles.slide} ${styles.slide2} ${activeSlide === 2 ? styles.active : ''}`}>
                     <div className="container">
                        <div className={styles.slideInner}>
                           <div>
                              <p className={styles.slideTitle}>Книги, которые <br /> вам хочется слушать</p>
                              <p className={styles.slideText}>
                                 Лучшая подборка аудиокниг по психологиии саморазвитию за все годы издательства...
                              </p>
                           </div>
                           <MainButton 
                              value="Выбрать книгу"
                              size="huge"
                              type="fullOrange"                            
                              style={activeSlide === 2 ? {animation: "appear 1s .2s forwards", opacity: "0"} : {}}   
                           />
                        </div>
                     </div>
                  </li>
                  <li className={`${styles.slide} ${styles.slide3} ${activeSlide === 3 ? styles.active : ''}`}>
                     <div className="container">
                        <div className={styles.slideInner}>
                           <div>
                              <p className={styles.slideTitle}>Книги, которые <br /> вам хочется слушать</p>
                              <p className={styles.slideText}>
                                 Лучшая подборка аудиокниг по психологиии саморазвитию за все годы издательства...
                              </p>
                           </div>
                           <MainButton 
                              value="Выбрать книгу"
                              size="huge"
                              type="fullOrange"                        
                              style={activeSlide === 3 ? {animation: "appear 1s .2s forwards", opacity: "0"} : {}}        
                           />
                        </div>
                     </div>
                  </li>
               </Slider>
      </div>
   );
}

export default Banner;