import { useHttp } from "../hooks/http.hook";

const useMovieService = () => {
   const {isLoading, request, error} = useHttp();

   const _apiBase = "https://api.themoviedb.org/3/";
   const _apikey = "cc4e2de8fec458b5d41c6336d571e646";
   const _apiImgLink = "https://image.tmdb.org/t/p/";

   const includeAdult = false; 

   const getMovieGroup = async (groupName) => {
      const res = await request(`${_apiBase}movie/${groupName}?api_key=${_apikey}&language=en-US&include_adult=${includeAdult}`);
      return res.results.map(_transformMovie);
   }

   const getTopMovie = async () => {
      const res = await getMovieGroup('popular');
      return res.slice(0, 1)[0];
   }

   const getMoviesByName = async (query) => {
      const res = await request(`${_apiBase}search/movie?api_key=${_apikey}&language=en-US&query=${query}&page=1&include_adult=${includeAdult}`);
      return res.results.map(_transformMovie);
   }

   const getMovie = async (id) => {
      const res = await request(`${_apiBase}movie/${id}?api_key=${_apikey}&language=en-US`);
      return _transformMovie(res);
   }

   const _transformMovie = (movie) => {
      return {
         adult: movie.adult,
         id: movie.id,
         title: movie.title,
         description: movie.overview,
         highQualityImg: `${_apiImgLink}w500/${movie.poster_path}`,
         lowQualityImg: `${_apiImgLink}w300/${movie.poster_path}`,
         backdrop: `${_apiImgLink}original/${movie.backdrop_path}`,
         date: movie.release_date,
         rating: `${Math.round(movie.vote_average * 10) / 10}`.replace(/\./, ','),
         voteCount: movie.vote_count
      }
   }

   return {isLoading, error, getMovieGroup, getTopMovie, getMoviesByName, getMovie};
}

export default useMovieService;