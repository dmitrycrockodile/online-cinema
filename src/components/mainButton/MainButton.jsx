import styles from "./mainButton.module.scss";

function MainButton({value, size = "medium", type = "fullOrange", border, color}) {
   const borderClass = border ? styles[border] : "";
   const colorClass = color ? styles[color] : "";

   return (
      <button className={`${styles.btn} ${styles[size]} ${styles[type]} ${borderClass} ${colorClass}`}>
         {value}
      </button>
   );
}

export default MainButton;