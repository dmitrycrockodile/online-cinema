import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import MainButton from './components/mainButton/MainButton';
import Footer from './components/footer/Footer';

import styles from './App.module.scss';
import About from './components/about/About';

function App() {
   return (
      <div className={styles.App}>
         <Header />
         <main>
            <div className={styles.banner}>
               <Slider>
                  <div className={styles.slide}>
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
                  </div>
                  <div className={styles.slide}>
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
                  </div>
                  <div className={styles.slide}>
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
                  </div>
               </Slider>
            </div>
            <About />
         </main>
         <Footer />
      </div>
   );
}

export default App;