import MainButton from '../mainButton/MainButton';

import filmImg1x from '../../assets/img/film2-1x.webp';
import filmImg2x from '../../assets/img/film2-2x.webp';

import styles from './discount.module.scss';

const Discount = () => {
   return (
      <div className={styles.discount}>
         <div className={styles.discountInner}>
            <div className={styles.film}>
               <img srcSet={`${filmImg1x} 1x, ${filmImg2x} 2x`} alt="Film" />
               <div className={styles.playBtn}>
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.7996 9.00001L0.599609 0.200012V17.8L13.7996 9.00001Z" fill="#fff" />
                  </svg>
               </div>
            </div>
            <div className={styles.text}>
               <h4>Eжедневное преимущество!</h4>
               <p>Даже полтора часа в день (в среднем столько занимает время на дорогу в мегаполисе на работу и домой), посвященных аудиочтению!</p>
            </div>
            <MainButton
               value="Получить скидку"
               size="big"
               type="fullOrange"
            />
         </div>
      </div>
   );
};

export default Discount;