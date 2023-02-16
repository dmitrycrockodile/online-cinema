import { useHttp } from "../hooks/http.hook";

const useMovieService = () => {
   const {isLoading, request, error} = useHttp();

   const _apiBase = "https://api.themoviedb.org/3/";
   const _apikey = "cc4e2de8fec458b5d41c6336d571e646";
   const _apiImgLink = "https://image.tmdb.org/t/p/";

   const getMovieGroup = async (groupName) => {
      const res = await request(`${_apiBase}movie/${groupName}?api_key=${_apikey}&language=en-US`);
      return res.results.map(_transformMovie);
   }

   const getTopMovie = async () => {
      const res = await getMovieGroup('popular');
      return res.slice(0, 1)[0];
   }

   // const getSearch = async () => {
   //    const res = await request(`${_apiBase}search/movie?api_key=${_apikey}&language=en-US&query=man&page=1&include_adult=true`)
   //    return res;
   // }

   const _transformMovie = (movie) => {
      return {
         adult: movie.adult,
         id: movie.id,
         title: movie.title,
         description: `${movie.overview.slice(0, 200)}...`,
         highQualityImg: `${_apiImgLink}w500/${movie.poster_path}`,
         lowQualityImg: `${_apiImgLink}w300/${movie.poster_path}`,
         date: movie.release_date,
      }
   }

   return {isLoading, error, getMovieGroup, getTopMovie};
}

export default useMovieService;