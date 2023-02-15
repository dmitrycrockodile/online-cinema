import { useState } from "react";

import styles from "./tabBar.module.scss";

function TabBar({children}) {
   const [activeTab, setActiveTab] = useState(children[0].props.label);

   const navLinks = children.map(tab => {
      const label = tab.props.label;

      return (
         <button 
            onClick={() => setActiveTab(label)} 
            className={activeTab === label ? `${styles.nav} ${styles.active}` : `${styles.nav}`} 
            key={label}>
               <h3>{label}</h3>
         </button>
      )}
   )

   const navContent = children.map(tabContent => {
      if (activeTab === tabContent.props.label) {
         return (
            tabContent
         )
      }
   })

   return (
      <div>
         <div className={styles.navWrapper}>
            {navLinks}
         </div>

         <div className={styles.content}>
            {navContent}
         </div>
      </div>
   );
}

export default TabBar;