import logo from "../../assets/img/footer-logo.svg";

import styles from "./footer.module.scss";

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
            <div className={styles.bottom}>

            </div>
         </div>
      </footer>
   );
}

export default Footer;