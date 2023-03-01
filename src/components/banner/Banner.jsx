import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useMovieService from '../../services/MovieService';

import MainButton from '../mainButton/MainButton';
import Slider from '../slider/Slider';
import ErrorMessage from '../errorMessage/ErrorMessage';

import styles from './banner.module.scss';
import '../../assets/style/animations.scss';

const Banner = () => {
   const [activeSlide, setActiveSlide] = useState(1);
   const [movies, setMovies] = useState([]);

   const {getMovieGroup, error} = useMovieService();

   useEffect(() => {
      getMovieGroup('popular').then(onMoviesLoaded);
   }, [])

   const onMoviesLoaded = (movies) => {
      setMovies(movies)
   }

   return (
      <div className={styles.banner}>
         {error 
            ? <ErrorMessage/> 
            : <Slider slideWidth={100} setActiveSlide={setActiveSlide}>
               {movies.slice(16, 20).map(
                  ({id, backdrop, title, description}, i) => (
                     <li className={`${styles.slide} ${activeSlide === (i + 1) ? styles.active : ''}`} key={id} style={{backgroundImage: `url(${backdrop})`}}>
                        <div className="container">
                           <div className={styles.slideInner}>
                              <div className={styles.slideInfo}>
                                 <p className={styles.slideTitle}>{title}</p>
                                 <p className={styles.slideText}>{`${description.slice(0, 80)}...`}</p>
                              </div>
                              <Link to={`/films/${id}`}>
                                 <MainButton 
                                    value="Watch online"
                                    size="huge"
                                    type="fullOrange"    
                                    style={activeSlide === 1 ? {animation: "appear 1s .2s forwards", opacity: "0"} : {}}      
                                 />
                              </Link>
                           </div>
                        </div>
                     </li>
               ))}
            </Slider>
         }
      </div>
   );
}

export default Banner;