import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import FilmList from './components/filmList/FilmList';
import TabBar from './components/tabBar/TabBar';
import About from './components/about/About';
import Discount from './components/discount/Discount';
import Selections from './components/selections/Selections';
import Footer from './components/footer/Footer';
import FilmCard from './components/filmCard/FilmCard';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import styles from './App.module.scss';

function App() {
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