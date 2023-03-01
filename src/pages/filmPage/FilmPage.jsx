import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMovieService from "../../services/MovieService";

import FilmItem from "../../components/filmItem/FilmItem";
import Discount from "../../components/discount/Discount";
import FilmList from "../../components/filmList/FilmList";

import styles from "./filmPage.module.scss";

const FilmPage = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState({});

   const { getMovie, error } = useMovieService();

   useEffect(() => {
      getMovie(id).then(res => onMovieLoaded(res));

      window.scrollTo(0, 0);
   }, [id])

   const onMovieLoaded = (movie) => {
      setMovie(movie);
   }

   return (
      <div className="container">
         <FilmItem data={movie} error={error} />

         <div className={styles.additional}>
            <h2 className={styles.title}>Дополнительные материалы</h2>
            <ul className={styles.list}>
               <li className={styles.item}>
                  <a href="/">
                     <img src={movie.lowQualityImg} alt={movie.title} />
                     <p className={styles.itemName}>Постер с героями фильма</p>
                  </a>
               </li>
               <li className={styles.item}>
                  <a href="/">
                     <img src={movie.lowQualityImg} alt={movie.title} />
                     <p className={styles.itemName}>Блокнот с главными героями</p>
                  </a>
               </li>
            </ul>
         </div>

         <Discount />


      </div>
   );
}

export default FilmPage;