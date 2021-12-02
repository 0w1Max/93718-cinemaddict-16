import {POSTERS_DIR, FILMS_TITLES_AND_POSTERS, FILM_DESCRIPTIONS, FILM_GENRES} from './data.js';
import {getRandomInteger} from '../utils.js';
import {generateComments} from './comments-data.js';

const generateFilmTitleAndPoster = () => {
  const randomIndex = getRandomInteger(0, FILMS_TITLES_AND_POSTERS.length - 1);

  return FILMS_TITLES_AND_POSTERS[randomIndex];
};

const generateFilmDescription = () => {
  const randomIndex = getRandomInteger(0, FILM_DESCRIPTIONS.length - 1);

  return FILM_DESCRIPTIONS.filter((description, index) => index <= randomIndex).join('');
};

const generateFilmGenres = () => {
  const randomIndex = getRandomInteger(0, FILM_GENRES.length - 1);

  return FILM_GENRES.filter((genre, index) => index <= randomIndex);
};

const generateFilm = () => {
  const newFilmTitleAndPoster = generateFilmTitleAndPoster();

  return {
    title: newFilmTitleAndPoster.title,
    titleOriginal: newFilmTitleAndPoster.title,
    poster: `${POSTERS_DIR}${newFilmTitleAndPoster.poster}`,
    director: '',
    writers: '',
    actors: '',
    releaseDate: '',
    runTime: '',
    country: '',
    genres: generateFilmGenres(),
    description: generateFilmDescription(),
    comments: Array.from({length:getRandomInteger(1,5)},generateComments)
  };
};

export {generateFilm};
