import { useRef } from 'react';
import useOutside from '../../hooks/useOutside.hook';

import styles from './search.module.scss';

const Search = ({active, setActive}) => {
   const rootEl = useRef(null);

   useOutside(rootEl, onOutsideClick, active);

   function onOutsideClick() {
      setActive(false)
   }

   return (
      <div className={active ? `${styles.search} ${styles.active}` : styles.search} ref={rootEl}>
         <input className={styles.searchInput} type="text" placeholder='Название книги которую ищите' />
         <button onClick={() => setActive(active => !active)} className={styles.searchBtn} >
            <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M22 22L15 15M17.3333 9.16667C17.3333 13.677 13.677 17.3333 9.16667 17.3333C4.65634 17.3333 1 13.677 1 9.16667C1 4.65634 4.65634 1 9.16667 1C13.677 1 17.3333 4.65634 17.3333 9.16667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>
      </div>
   );
};

export default Search;