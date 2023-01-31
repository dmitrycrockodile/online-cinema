import styles from "./slider.module.scss";

function Slider({children}) {
   return (
      <div className={styles.mainContainer}>
         <ul className={styles.itemsContainer}>
            {children}
         </ul>
         
         <div className="container">
            <div className={styles.dots}>
               <button className={styles.dot}></button>
               <button className={`${styles.dot} ${styles.active}`}></button>
               <button className={styles.dot}></button>
            </div>
         </div>
      </div>
   );
}

export default Slider;