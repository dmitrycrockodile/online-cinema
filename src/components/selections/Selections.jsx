//images for low resolution screen
import selections1_1x from "../../assets/img/selections1-1x.webp";
import selections2_1x from "../../assets/img/selections2-1x.webp";
import selections3_1x from "../../assets/img/selections3-1x.webp";
import selections4_1x from "../../assets/img/selections4-1x.webp";
//images for high resolution screen
import selections1_2x from "../../assets/img/selections1-2x.webp";
import selections2_2x from "../../assets/img/selections2-2x.webp";
import selections3_2x from "../../assets/img/selections3-2x.webp";
import selections4_2x from "../../assets/img/selections4-2x.webp";

import styles from "./selections.module.scss";

const Selections = () => {
   return (
      <section className={styles.selections}>
         <h3 className={styles.selectionsTitle}>Подборки</h3>
         <div className={styles.selectionsInner}>
            <a className={styles.item} href="/">
               <img srcSet={`${selections1_1x} 1x, ${selections1_2x} 2x`} alt="selection" />
               <p>В дороге</p>
            </a>
            <a className={styles.item} href="/">
               <img srcSet={`${selections2_1x} 1x, ${selections2_2x} 2x`} alt="selection" />
               <p>Для отдыха</p>
            </a>
            <a className={styles.item} href="/">
               <img srcSet={`${selections3_1x} 1x, ${selections3_2x} 2x`} alt="selection" />
               <p>Для учебы</p>
            </a>
            <a className={styles.item} href="/">
               <img srcSet={`${selections4_1x} 1x, ${selections4_2x} 2x`} alt="selection" />
               <p>Для работы</p>
            </a>
         </div>
      </section>
   );
};

export default Selections;