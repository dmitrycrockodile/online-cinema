import FilmCard from "../filmCard/FilmCard";

import styles from "./tabBar.module.scss";

function TabBar() {
   return (
      <div className={styles.root}>
         <div className={styles.navWrapper}>
            <button className={`${styles.nav} ${styles.active}`}>Новинки</button>
            <button className={styles.nav}>Популярное</button>
            <button className={styles.nav}>Выбор редакции</button>
         </div>

         <div className={styles.content}>
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
         </div>
      </div>
   );
}

export default TabBar;