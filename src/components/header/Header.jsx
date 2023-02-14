import Search from "../search/Search";
import MainButton from "../mainButton/MainButton";

import logo from "../../assets/img/header-logo.svg";

import styles from "./header.module.scss";

function Header() {
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
                        <a className="underlined" href="/">Как купить</a>
                     </li>
                     <li>
                        <a className="underlined" href="/">F.A.Q</a>
                     </li>
                     <li>
                        <a className="underlined" href="/">Контакты</a>
                     </li>
                  </ul>
               </nav>
               <Search />
               <button className={styles.search}>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M22 22L15 15M17.3333 9.16667C17.3333 13.677 13.677 17.3333 9.16667 17.3333C4.65634 17.3333 1 13.677 1 9.16667C1 4.65634 4.65634 1 9.16667 1C13.677 1 17.3333 4.65634 17.3333 9.16667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
               <div className={styles.user}>
                  <MainButton 
                     value="Регистрация"
                     size="medium"
                     border="whiteBorder"
                     type="transparent"
                  />
                  <MainButton 
                     value="Войти"
                     size="medium"
                     border="blackBorder"
                     type="fullOrange"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;