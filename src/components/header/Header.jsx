import logo from "../../assets/img/header-logo.svg";
import searchIcon from '../../assets/icons/search.svg';

import styles from "./header.module.scss";

function Header(props) {
   return (
      <div className={styles.header}>
         <div className="container">
            <div className={styles.headerInner}>
               <a href="/">
                  <img src={logo} alt="Our logo" />
               </a>
               <nav className={styles.menu}>
                  <ul>
                     <li>
                        <a href="/">Как купить</a>
                     </li>
                     <li>
                        <a href="/">F.A.Q</a>
                     </li>
                     <li>
                        <a href="/">Контакты</a>
                     </li>
                  </ul>
               </nav>
               <button className={styles.search}>
                  <img src={searchIcon} alt="Search" />
               </button>
               <div className={styles.user}>
                  <a className={styles.register} href="/">Регистрация</a>
                  <a className={styles.login} href="/">Войти</a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;