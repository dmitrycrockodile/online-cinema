import { useEffect, useState } from 'react';
import useMovieService from '../../services/MovieService';
import PropTypes from 'prop-types'; 

import FilmCard from '../filmCard/FilmCard';
import Skeleton from "../skeleton/Skeleton";
import ErrorMessage from "../errorMessage/ErrorMessage";

import styles from './categories.module.scss';


const Categories = ({categories = []}) => {
   const [activeCategory, setActiveCategory] = useState(categories[0].name);
   const [movies, setMovies] = useState([]);
   
   const {getMovieGroup, error, isLoading} = useMovieService();

   useEffect(() => {
      getMovieGroup(activeCategory).then(onMoviesLoaded)
   }, [activeCategory])

   const onMoviesLoaded = (movies) => {
      setMovies(movies.slice(10, 20))
   }

   const items = movies.map(movie => {
      const {adult, highQualityImg, id, lowQualityImg, title, date} = movie;

      return (<FilmCard 
               imageSources={[lowQualityImg, highQualityImg]} 
               title={title}
               date={date}
               adult={adult} 
               id={id}
               key={id}/>)
   });

   const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

   return (
      <div className="categories">
         <ul>
            {categories.map(item => {
               return (
                  <li  
                     className={activeCategory === item.name ? `${styles.nav} ${styles.active}` : styles.nav} 
                     onClick={() => setActiveCategory(item.name)}
                     key={item.label}
                  >
                        {item.label}
                  </li>
               )
            })}
         </ul>

         <ul className={styles.items}>
            {error ? <ErrorMessage /> : isLoading ? skeletons : items}
         </ul>
      </div>
   );
}

Categories.propTypes = {
   categories: PropTypes.arrayOf(PropTypes.object)
}

export default Categories;