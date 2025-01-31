import TheMovieDbSource from '../../data/themoviedb-source.js';
import { createMovieItemTemplate } from '../templates/template-creator.js';

const NowPlaying = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">

        </div>
      </div>
         `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
    const moviesContainer = document.querySelector('#movies');
    moviesContainer.innerHTML = '';
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
