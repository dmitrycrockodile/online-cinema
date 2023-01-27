import Footer from './components/footer/Footer';

import styles from './App.module.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className={styles.App}>
        <Header />
        <Footer />
    </div>
  );
}

export default App;