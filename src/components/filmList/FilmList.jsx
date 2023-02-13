import { useState, useEffect } from "react";
import MovieService from "../../services/MovieService";

import MainButton from "../mainButton/MainButton";
import FilmCard from "../filmCard/FilmCard";
import Carousel from "../carousel/Carousel";
import Skeleton from "../skeleton/Skeleton";

import styles from "./filmList.module.scss";

const movieService = new MovieService();

function FilmList({title, button = false, groupName = 'popular'}) {
   const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      movieService.getMovieGroup(groupName).then(onMoviesLoaded)
   }, [groupName])

   const onMoviesLoaded = (movies) => {
      setMovies(movies)
      setIsLoading(false)
   }

   const moviesList = movies.slice(0, 10).map(movie => {
      const {adult, highQualityImg, id, lowQualityImg, title, date} = movie;

      return (<FilmCard 
               imageSources={[lowQualityImg, highQualityImg]} 
               title={title}
               date={date}
               adult={adult} 
               key={id} />)
   })

   const skeletons = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

   return (
      <div className={styles.root}>
         <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            {button && <MainButton
               value="Смотреть все"
               size="small"
               type="fullOrange"
            />}
         </div>
         
         <div className={styles.list}>
            <Carousel>
               {isLoading
                  ? skeletons
                  : moviesList}
            </Carousel>
         </div>
      </div>   
   );
}

export default FilmList;