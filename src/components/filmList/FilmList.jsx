import MainButton from "../mainButton/MainButton";
import FilmCard from "../filmCard/FilmCard";

import styles from "./filmList.module.scss";

function FilmList({title, button = false}) {
   return (
      <div className={styles.root}>
         <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            {button && <MainButton
               value="Смотреть все"
               size="small"
               type="fullOrange"
            />}
         </div>
         <div className={styles.list}>
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
         </div>
      </div>   
   );
}

export default FilmList;