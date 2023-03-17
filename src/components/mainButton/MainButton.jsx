import PropTypes from 'prop-types'; 

import styles from "./mainButton.module.scss";

const MainButton = ({
   value, 
   size = "medium", 
   type = "fullOrange", 
   border, 
   color,
   disabled, 
   style
}) => {
   const borderClass = border ? styles[border] : "";
   const colorClass = color ? styles[color] : "";

   return (
      <button 
         style={{...style}} 
         type="submit"
         className={`${styles.btn} ${styles[size]} ${styles[type]} ${borderClass} ${colorClass}`}
         disabled={disabled}>
         {value}
         {border === "orangeBorder"  ? <><span></span><span></span><span></span><span></span></> : ''}
      </button>
   );
}

MainButton.propTypes = {
   value: PropTypes.string,
   size: PropTypes.string,
   type: PropTypes.string,
   border: PropTypes.string,
   color: PropTypes.string,
   style: PropTypes.object
}

export default MainButton;