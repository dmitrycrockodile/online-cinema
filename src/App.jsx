import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Spinner from "./components/spinner/Spinner";

import styles from './App.module.scss';

const Home = lazy(() => import('./pages/home/Home'));
const FilmPage = lazy(() => import('./pages/filmPage/FilmPage'));

const App = () => {
   return (
      <Router>
         <div className={styles.App}>
            <Header />
            <main>
               <Suspense fallback={<Spinner />}>
                  <Routes>
                     <Route path="/films/:id" element={<FilmPage />}/>
                     <Route path="/" element={<Home />}/>
                  </Routes>
               </Suspense>
            </main>
            <Footer />
         </div>
      </Router>
   );
}

export default App;