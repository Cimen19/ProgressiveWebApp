import { openDB } from 'idb';
import CONFIG from '../globals/confing';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const FavoriteMovieDB = {
  async getMovie(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllMovies() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putMovies(movie) {
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  },

  async deleteMovie(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteMovieDB;
