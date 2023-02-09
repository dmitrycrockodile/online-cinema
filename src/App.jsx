import { useState } from 'react';

import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import MainButton from './components/mainButton/MainButton';
import FilmList from './components/filmList/FilmList';
import TabBar from './components/tabBar/TabBar';
import About from './components/about/About';
import Discount from './components/discount/Discount';
import Selections from './components/selections/Selections';
import Footer from './components/footer/Footer';
import FilmCard from './components/filmCard/FilmCard';

import styles from './App.module.scss';
import './assets/style/animations.scss';

function App() {
   const [activeSlide, setActiveSlide] = useState(1);

   return (
      <div className={styles.App}>
         <Header />
         <main>
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
            <div className="container">
               <div className={styles.wrapper}>
                  <FilmList 
                     title="Новинки"
                     button
                  />
               </div>
               <div className={styles.wrapper}>
                  <FilmList 
                     title="Популярное"
                     button
                  />
               </div>
               <div className={styles.wrapper}>
                  <FilmList 
                     title="Выбор редакции"
                     button
                  />
               </div>
               <div className={styles.wrapper}>
                  <TabBar>
                     <ul className={styles.tabList} label="Новинки">
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                     </ul>

                     <ul className={styles.tabList} label="Популярное">
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                     </ul>

                     <ul className={styles.tabList} label="Выбор редакции">
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                        <li><FilmCard /></li>
                     </ul>
                  </TabBar>
               </div>
               <div className={styles.wrapper}>
                  <Selections />
               </div>
               <About />
               <Discount />
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default App;