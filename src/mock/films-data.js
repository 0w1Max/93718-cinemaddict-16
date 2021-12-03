import {
  POSTERS_DIR,
  FILMS_TITLES_AND_POSTERS,
  FILM_DESCRIPTIONS,
  FILM_DIRECTORS,
  FILM_WRITERS,
  FILM_ACTORS,
  FILM_COUNTRY,
  FILM_GENRES
} from './data.js';

import {getRandomInteger, getRandomFloat} from '../utils.js';
import {generateComments} from './comments-data.js';
import dayjs from 'dayjs';

const generateFilmTitleAndPoster = () => {
  const randomIndex = getRandomInteger(0, FILMS_TITLES_AND_POSTERS.length - 1);

  return FILMS_TITLES_AND_POSTERS[randomIndex];
};

const generateFilmDirector = () => {
  const randomIndex = getRandomInteger(0, FILM_DIRECTORS.length - 1);

  return FILM_DIRECTORS[randomIndex];
};

const generateFilmWriters = () => {
  const randomIndex = getRandomInteger(0, FILM_WRITERS.length - 1);

  return FILM_WRITERS.filter((writer, index) => index <= randomIndex).join(', ');
};

const generateFilmActors = () => {
  const randomIndex = getRandomInteger(0, FILM_ACTORS.length - 1);

  return FILM_ACTORS.filter((actor, index) => index <= randomIndex).join(', ');
};

const generateFilmCountry= () => {
  const randomIndex = getRandomInteger(0, FILM_COUNTRY.length - 1);

  return FILM_COUNTRY[randomIndex];
};

const generateFilmDescription = () => {
  const randomIndex = getRandomInteger(0, FILM_DESCRIPTIONS.length - 1);

  return FILM_DESCRIPTIONS.filter((description, index) => index <= randomIndex).join('');
};

const generateFilmGenres = () => {
  const randomIndex = getRandomInteger(0, FILM_GENRES.length - 1);

  return FILM_GENRES.filter((genre, index) => index <= randomIndex);
};

const generateRunTime = () => {
  const hours = getRandomInteger(0, 5);
  const minutes = getRandomInteger(0, 59);

  return hours !== 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const generateFilm = () => {
  const newFilmTitleAndPoster = generateFilmTitleAndPoster();

  return {
    title: newFilmTitleAndPoster.title,
    titleOriginal: newFilmTitleAndPoster.title,
    poster: `${POSTERS_DIR}${newFilmTitleAndPoster.poster}`,
    ratingAge: getRandomInteger(1, 18),
    ratingTotal: getRandomFloat(),
    director: generateFilmDirector(),
    writers: generateFilmWriters(),
    actors: generateFilmActors(),
    releaseDate: dayjs().format('DD MMMM YYYY'),
    runTime: generateRunTime(),
    country: generateFilmCountry(),
    genres: generateFilmGenres(),
    description: generateFilmDescription(),
    comments: Array.from({length:getRandomInteger(1,5)},generateComments)
  };
};

export {generateFilm};
