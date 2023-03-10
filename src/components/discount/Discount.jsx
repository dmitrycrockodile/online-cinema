import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMovieService from '../../services/MovieService';

import MainButton from '../mainButton/MainButton';

import styles from './discount.module.scss';


const Discount = () => {
   const [movie, setMovie] = useState({});
   
   const { getTopMovie } = useMovieService();

   useEffect(() => {
      getTopMovie().then(onMovieLoaded)
   }, [])

   const onMovieLoaded = (movie) => {
      setMovie(movie)
   }

   const {highQualityImg, lowQualityImg, title, description, id} = movie;
   const formattedDescription = description && description.length > 245 ? `${description.slice(0, 245).trim()}...` : description;

   return (
      <article className={styles.discount}>
         <Link to={`/films/${id}`} className={styles.discountInner}>
            <div className={styles.film}>
               <img srcSet={`${lowQualityImg} 1x, ${highQualityImg} 2x`} alt={title} />
               <div className={styles.playBtn}>
                  <svg width="14" height="18" viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.7996 9.00001L0.599609 0.200012V17.8L13.7996 9.00001Z" />
                  </svg>
               </div>
            </div>
            <div className={styles.text}>
               <h4>{title}</h4>
               <p>{formattedDescription}</p>
            </div>
            <MainButton
               value="Смотреть онлайн"
               size="big"
               type="fullOrange"
            />
         </Link>
      </article>
   );
};

export default Discount;