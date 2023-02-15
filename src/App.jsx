import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import FilmList from './components/filmList/FilmList';
import About from './components/about/About';
import Discount from './components/discount/Discount';
import Selections from './components/selections/Selections';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import styles from './App.module.scss';

const App = () => {
   return (
      <div className={styles.App}>
         <Header />
         <main>
            <Banner />
            <div className="container">
               <div className={styles.wrapper}>
                  <ErrorBoundary>
                     <FilmList 
                        title="Скоро в кино"
                        button
                        groupName="upcoming"
                     />
                  </ErrorBoundary>
               </div>
               <div className={styles.wrapper}>
                  <ErrorBoundary>
                     <FilmList 
                        title="Популярное"
                        button
                        groupName="popular"
                     />
                  </ErrorBoundary>
               </div>
               <div className={styles.wrapper}>
                  <ErrorBoundary>
                     <FilmList 
                        title="Выбор редакции"
                        button
                        groupName="top_rated"
                     />
                  </ErrorBoundary>
               </div>
               <div className={styles.wrapper}>
               <ErrorBoundary>
                  <Categories
                     categories={[
                        {label: "Скоро в кино", name: "upcoming"}, 
                        {label: "Популярное", name: "popular"}, 
                        {label: "Выбор редакции", name: "top_rated"}
                     ]}
                  />
               </ErrorBoundary>
               </div>
               <div className={styles.wrapper}>
                  <Selections />
               </div>
               <About />
               <ErrorBoundary>
                  <Discount />
               </ErrorBoundary>
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default App;