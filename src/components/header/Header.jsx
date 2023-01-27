import logo from "../../assets/img/header-logo.svg";
import searchIcon from '../../assets/icons/search.svg';

import styles from "./header.module.scss";

function Header(props) {
   return (
      <div className={styles.header}>
         <div className="container">
            <div className={styles.headerInner}>
               <a className="logo" href="/">
                  <img src={logo} alt="Our logo" />
               </a>
               <nav className={styles.menu}>
                  <ul className="menu__list">
                     <li className="menu__item">
                        <a className="menu__link" href="/">Как купить</a>
                     </li>
                     <li className="menu__item">
                        <a className="menu__link" href="/">F.A.Q</a>
                     </li>
                     <li className="menu__item">
                        <a className="menu__link" href="/">Контакты</a>
                     </li>
                  </ul>
               </nav>
               <button className={styles.search}>
                  <img src={searchIcon} alt="Search" />
               </button>
               <div className={styles.user}>
                  <a className={styles.userReg} href="/">Регистрация</a>
                  <a className={styles.userLogin} href="/">Войти</a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;