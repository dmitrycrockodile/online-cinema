import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Spinner from "./components/spinner/Spinner";

import styles from './App.module.scss';

const Home = lazy(() => import('./pages/home/Home'));
const FilmPage = lazy(() => import('./pages/filmPage/FilmPage'));
const Authentication = lazy(() => import('./pages/authentication/Authentication'));

const App = () => {
   return (
      <Router>
         <div className={styles.App}>
            <AuthProvider>
               <Header />
               <main>
                  <Suspense fallback={<Spinner />}>
                     <Routes>
                        <Route path="/films/:id" element={<FilmPage />}/>
                        <Route path="/authentication" element={<Authentication />} />
                        <Route path="/" element={<Home />}/>
                     </Routes>
                  </Suspense>
               </main>
               <Footer />
            </AuthProvider>
         </div>
      </Router>
   );
}

export default App;