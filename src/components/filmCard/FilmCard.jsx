import film from "../../assets/img/film.webp";

import styles from "./filmCard.module.scss";

function FilmCard({src, title = "Не твоя Людмила", author = "Линкольн Чайлд", adult}) {
   return (
      <a href="/" className={styles.card}>
         <img className={styles.img} src={film} alt={title} />
         <div className={styles.play}>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13.7996 9.00001L0.599609 0.200012V17.8L13.7996 9.00001Z" fill="#0D111A"/>
            </svg>
         </div>
         {adult && <span className={styles.adult}>18+</span>}
         <div className={styles.info}>
            <p className={styles.author}>{author}</p>
            <svg viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.61091 2.62994C0.463029 4.80319 0.463029 8.32672 2.61091 10.5L12.0001 20L21.3891 10.5C23.537 8.32672 23.537 4.80318 21.3891 2.62994C19.2412 0.456688 15.7588 0.456688 13.6109 2.62994L12.0001 4.25994L10.3891 2.62994C8.2412 0.456688 4.7588 0.456688 2.61091 2.62994Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </div>
         <h3 className={styles.title}>{title}</h3>
      </a>
   );
}

export default FilmCard;