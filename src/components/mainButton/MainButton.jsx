import styles from "./mainButton.module.scss";

function MainButton({value, size = "medium", type = "fullOrange", border, color, style}) {
   const borderClass = border ? styles[border] : "";
   const colorClass = color ? styles[color] : "";

   return (
      <button style={{...style}} className={`${styles.btn} ${styles[size]} ${styles[type]} ${borderClass} ${colorClass}`}>
         {value}
      </button>
   );
}

export default MainButton;