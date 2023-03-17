import TabBar from "../../components/tabBar/TabBar";
import AuthForm from "../../components/authForm/AuthForm";

import logo from "../../assets/img/header-logo.svg";

import styles from './authentication.module.scss';

function Authentication() {
   return (
      <section className={styles.root}>
         <div className="container">
            <div className={styles.wrapper}>
            <img className={styles.logo} src={logo} alt="Our logo" />
               <div className={styles.left}>
                  <TabBar>
                     <div label="Sign Up">
                        <AuthForm name="Sign up" />
                     </div>

                     <div label="Sign In">
                        <AuthForm name="Sign in" />
                     </div>
                  </TabBar>
               </div>
               <div className={styles.right}>
                  <p className={styles.title}>Книги, которые <br/> вам хочется слушать</p>
                  <p className={styles.text}>
                     Лучшая подборка аудиокниг по психологиии саморазвитию за все годы издательства...
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Authentication;