import logo from "../../assets/img/footer-logo.svg";

import styles from "./footer.module.scss";
import "../../assets/style/utils.scss";

function Footer() {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.top}>
               <a href="/" className={styles.logo}>
                  <img src={logo} alt="Our logo" />
               </a>

               <div className={styles.lists}>
                  <ul className={styles.list}>
                  <li className={styles.listItem}>
                     <h4>Жанры</h4>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Нонфикшн</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Псиология</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Бизнес</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Финансы</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Все жанры</a>
                  </li>
                  </ul>

                  <ul className={styles.list}>
                  <li className={styles.listItem}>
                     <h4>Категории</h4>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Популярное</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Новинки</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Выбор редакции</a>
                  </li>
                  </ul>

                  <ul className={styles.list}>
                  <li className={styles.listItem}>
                     <h4>Разделы</h4>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Как купить</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Часто задаваемые вопросы</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Сотрудничество</a>
                  </li>
                  <li className={styles.listItem}>
                     <a href="/">Контакты</a>
                  </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className={styles.line}></div>
         <div className="container">
            <div className={styles.bottom}>
               <div className={styles.copyright}>
                  <p>© 2022, «Аудитерия». Все права защищены.</p>
                  <div className={styles.links}>
                     <a href="/">Политика конфиденциальности</a>
                     <span className={styles.gap}></span>
                     <a href="/">Лицензионное соглашение</a>
                  </div>
               </div>
               <div className={styles.logos}>
                  <svg
                     className={styles.visa}
                     width="66"
                     height="26"
                     viewBox="0 0 51 17"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M22.1001 16.3035H17.9688L20.5528 0.289062H24.6839L22.1001 16.3035Z"
                        fill="inherit"
                     />
                     <path
                        d="M37.0765 0.681799C36.2617 0.357769 34.9692 0 33.371 0C29.2912 0 26.4182 2.18058 26.4006 5.29814C26.3667 7.59828 28.4575 8.87583 30.0214 9.64277C31.6197 10.4265 32.1631 10.938 32.1631 11.6365C32.1468 12.7094 30.8715 13.2039 29.682 13.2039C28.0326 13.2039 27.1488 12.949 25.8057 12.3521L25.2617 12.0962L24.6836 15.6911C25.6526 16.1336 27.4378 16.5262 29.2912 16.5434C33.6261 16.5434 36.4483 14.3966 36.4817 11.0743C36.4982 9.25126 35.3941 7.85438 33.0139 6.71292C31.5689 5.98017 30.684 5.48609 30.684 4.73636C30.7009 4.05479 31.4324 3.35668 33.0636 3.35668C34.4066 3.32249 35.3935 3.64607 36.141 3.96987L36.5147 4.13993L37.0765 0.681799Z"
                        fill="inherit"
                     />
                     <path
                        d="M42.5677 10.6302C42.9079 9.71015 44.2171 6.14945 44.2171 6.14945C44.1999 6.18364 44.5567 5.21246 44.7607 4.61625L45.0494 5.99615C45.0494 5.99615 45.8317 9.82948 46.0016 10.6302C45.3559 10.6302 43.3837 10.6302 42.5677 10.6302ZM47.6673 0.289062H44.4717C43.4863 0.289062 42.7376 0.578447 42.3124 1.61779L36.1758 16.3033H40.5107C40.5107 16.3033 41.2244 14.3267 41.3778 13.901C41.8533 13.901 46.0703 13.901 46.6821 13.901C46.8007 14.4633 47.175 16.3033 47.175 16.3033H51.0003L47.6673 0.289062Z"
                        fill="inherit"
                     />
                     <path
                        d="M14.5173 0.289062L10.4714 11.2094L10.0293 8.99461C9.28125 6.43906 6.93532 3.6625 4.31738 2.28192L8.02334 16.2865H12.3921L18.8859 0.289062H14.5173Z"
                        fill="inherit"
                     />
                     <path
                        d="M6.71495 0.289062H0.068001L0 0.612639C5.18504 1.94159 8.61899 5.14498 10.0298 8.99529L8.58488 1.63522C8.34698 0.612413 7.61591 0.322801 6.71495 0.289062Z"
                        fill="#FAA61A"
                     />
                  </svg>
                  <svg
                     className={styles.mastercard}
                     height="26"
                     viewBox="0 0 32 20"
                     width="39"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <g>
                        <g>
                           <g>
                              <circle
                                 cx="10"
                                 cy="10"
                                 fill="#747474"
                                 r="10"
                              />
                              <path
                                 d="M22,0c-2.246,0-4.312,0.75-5.98,2H16v0.014C15.604,2.312,15.24,2.648,14.893,3h2.214c0.308,0.313,0.592,0.648,0.855,1H14.03c-0.242,0.319-0.464,0.652-0.667,1h5.264c0.188,0.324,0.365,0.654,0.518,1h-6.291c-0.143,0.325-0.269,0.658-0.377,1h7.044c0.104,0.326,0.186,0.661,0.258,1h-7.563c-0.067,0.328-0.123,0.66-0.157,1h7.881C19.979,9.328,20,9.661,20,10h-8c0,0.339,0.027,0.67,0.06,1h7.882c-0.038,0.339-0.093,0.672-0.162,1h-7.563c0.069,0.341,0.158,0.673,0.261,1h7.044c-0.108,0.342-0.234,0.675-0.377,1h-6.291c0.151,0.344,0.321,0.678,0.509,1h5.264c-0.202,0.348-0.427,0.681-0.669,1H14.03c0.266,0.352,0.553,0.687,0.862,1h2.215c-0.348,0.353-0.711,0.688-1.107,0.986C17.672,19.245,19.745,20,22,20c5.523,0,10-4.478,10-10S27.523,0,22,0z"
                                 fill="#B1B1B1"
                              />
                           </g>
                        </g>
                     </g>
                  </svg>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
