import Banner from '../../banner/Banner';
import FilmList from '../../filmList/FilmList';
import About from '../../about/About';
import Discount from '../../discount/Discount';
import Selections from '../../selections/Selections';
import Categories from '../../categories/Categories';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

import styles from './home.module.scss';

const Home = () => {
   return (
      <>
         <Banner />
         <div className="container">
            <section>
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
            </section>
            <section className={styles.wrapper}>
               <Selections />
            </section>
            <About />
            <ErrorBoundary>
               <Discount />
            </ErrorBoundary>
         </div> 
      </>
   );
}

export default Home;