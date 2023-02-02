import selections1 from "../../assets/img/selections-1.webp";
import selections2 from "../../assets/img/selections-2.webp";
import selections3 from "../../assets/img/selections-3.webp";
import selections4 from "../../assets/img/selections-4.webp";

import styles from "./selections.module.scss";

const Selections = () => {
   return (
      <section className={styles.selections}>
         <h3 className={styles.selectionsTitle}>Подборки</h3>
         <div className={styles.selectionsInner}>
            <a className={styles.item} href="/">
               <img src={selections1} alt="selection" />
               <p>В дороге</p>
            </a>
            <a className={styles.item} href="/">
               <img src={selections2} alt="selection" />
               <p>Для отдыха</p>
            </a>
            <a className={styles.item} href="/">
               <img src={selections3} alt="selection" />
               <p>Для учебы</p>
            </a>
            <a className={styles.item} href="/">
               <img src={selections4} alt="selection" />
               <p>Для работы</p>
            </a>
         </div>
      </section>
   );
};

export default Selections;