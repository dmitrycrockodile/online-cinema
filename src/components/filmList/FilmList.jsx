import { useState, useEffect } from "react";
import MovieService from "../../services/MovieService";

import MainButton from "../mainButton/MainButton";
import FilmCard from "../filmCard/FilmCard";
import Carousel from "../carousel/Carousel";

import styles from "./filmList.module.scss";

const movieService = new MovieService();

function FilmList({title, button = false, groupName = 'popular'}) {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      movieService.getMovieGroup(groupName).then(res => setMovies(res))
   }, [groupName])

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
               {movies.slice(0, 10).map(movie => {
                  const {adult, highQualityImg, id, lowQualityImg, title, date} = movie;

                  return (<FilmCard 
                           imageSources={[lowQualityImg, highQualityImg]} 
                           title={title}
                           date={date}
                           adult={adult} 
                           key={id} />)
               })}
            </Carousel>
         </div>
      </div>   
   );
}

export default FilmList;