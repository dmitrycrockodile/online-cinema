import { useRef, useState, useEffect } from 'react';
import useOutside from '../../hooks/useOutside.hook';
import useMovieService from '../../services/MovieService';

import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import styles from './search.module.scss';

const Search = ({active, setActive}) => {
   const [searchData, setSearchData] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const {getMoviesByName, isLoading, error} = useMovieService();

   const rootEl = useRef(null);

   useEffect(() => {
      getMoviesByName(inputValue).then(onSearchDataLoaded);
   }, [inputValue])

   const onSearchDataLoaded = (data) => {
      setSearchData(data.slice(0, 5))
   }

   const onInputChange = (e) => {
      setInputValue(e.target.value);
   }

   //closing and reseting search on outside click
   useOutside(rootEl, onOutsideClick, active);
   function onOutsideClick() {
      setActive(false);
      setInputValue('');
   }

   //content types
   const errorMessage = error && active ? <ErrorMessage /> : null;
   const spinner = isLoading && active ? <Spinner /> : null;
   const items = !(isLoading || error) && active ? searchData.map((movie => {
      const {highQualityImg, id, lowQualityImg, title, description, date} = movie;

      return ( 
         <SearchCard 
            imageSource={[lowQualityImg, highQualityImg]}
            key={id}
            title={title}
            description={description.slice(0, 70)}
            date={date}/>
      )
   })) : null;

   return (
      <div className={active ? `${styles.search} ${styles.active}` : styles.search} ref={rootEl}>
         <input 
            className={styles.searchInput} 
            type="text" 
            placeholder='Название книги которую ищите' 
            value={inputValue}
            onChange={e => onInputChange(e)}
         />
         <button onClick={() => setActive(active => !active)} className={styles.searchBtn} >
            <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M22 22L15 15M17.3333 9.16667C17.3333 13.677 13.677 17.3333 9.16667 17.3333C4.65634 17.3333 1 13.677 1 9.16667C1 4.65634 4.65634 1 9.16667 1C13.677 1 17.3333 4.65634 17.3333 9.16667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>

         <ul className={styles.list}>
            {errorMessage}
            {spinner}
            {items}
         </ul>
      </div>
   );
};

const SearchCard = ({
   imageSource, 
   title, 
   description, 
   date
}) => {
   return (
      <li>
         <a className={styles.item} href="/">
            <img srcSet={`${imageSource[0]} 1x, ${imageSource[1]} 2x`} alt={title} />
            <div className={styles.info}>
               <h3>{title}</h3>
               <span>{date}</span>
               <p>{description}...</p>
            </div>
         </a>
      </li>
   )
}

export default Search;