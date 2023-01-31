import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import MainButton from './components/mainButton/MainButton';
import FilmList from './components/filmList/FilmList';
import TabBar from './components/tabBar/TabBar';
import Footer from './components/footer/Footer';

import styles from './App.module.scss';
import About from './components/about/About';
import Discount from './components/discount/Discount';

function App() {
   return (
      <div className={styles.App}>
         <Header />
         <main>
            <div className={styles.banner}>
               <Slider>
                  <li className={styles.slide}>
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
                           />
                        </div>
                     </div>
                  </li>
                  <li className={styles.slide}>
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
                           />
                        </div>
                     </div>
                  </li>
                  <li className={styles.slide}>
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
               <TabBar />
               <About />
               <Discount />
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default App;