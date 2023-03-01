import { useState } from "react";
import { Link } from "react-router-dom";

import Search from "../../components/search/Search";
import MainButton from "../../components/mainButton/MainButton";

import logo from "../../assets/img/header-logo.svg";

import styles from "./header.module.scss";

const Header = () => {
   const [activeSearch, setActiveSearch] = useState(false);

   return (
      <div className={styles.header}>
         <div className="container">
            <div className={styles.headerInner}>
               <Link to="/">
                  <img src={logo} alt="Our logo" />
               </Link>
               <nav className={activeSearch ? `${styles.menu} ${styles.hidden}` : styles.menu}>
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
               <Search active={activeSearch} setActive={setActiveSearch} />
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