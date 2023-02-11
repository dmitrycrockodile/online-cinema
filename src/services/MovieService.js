export default class MovieService {
   _apiBase = "https://api.themoviedb.org/3/movie/";
   _apikey = "cc4e2de8fec458b5d41c6336d571e646";

   getResource = async (url) => {
      let res = await fetch(url);
   
      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status - ${res.status}`);
      }
   
      return await res.json();
   }

   getMovieGroup = async (groupName) => {
      const res = await this.getResource(`${this._apiBase}${groupName}?api_key=${this._apikey}&language=en-US`);
      return res.results.map(this._transformMovie);
   }

   getTopMovie = async () => {
      const res = await this.getMovieGroup('popular');
      return res.slice(0, 1)[0];
   }

   _transformMovie = (movie) => {
      return {
         adult: movie.adult,
         id: movie.id,
         title: movie.title,
         description: `${movie.overview.slice(0, 200)}...`,
         highQualityImg: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
         lowQualityImg: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
         date: movie.release_date,
      }
   }
}