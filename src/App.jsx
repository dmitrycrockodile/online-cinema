import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';

import styles from './App.module.scss';

const App = () => {
   return (
      <div className={styles.App}>
         <Header />
            <Home />
         <Footer />
      </div>
   );
}

export default App;