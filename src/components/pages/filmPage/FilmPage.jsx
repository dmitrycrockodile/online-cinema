import { useParams } from "react-router-dom";

import FilmItem from "../../filmItem/FilmItem";

import styles from "./filmPage.module.scss";

const FilmPage = () => {
   const { id } = useParams();

   return (
      <div className="container">
         <FilmItem id={id} />
      </div>
   );
}

export default FilmPage;