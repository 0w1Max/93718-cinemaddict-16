// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const POSTERS_DIR = '/images/posters/';

const generateFilmTitleAndPoster = () => {
  const filmsTitlesAndPosters = [
    {
      'title': 'The Dance of Life',
      'poster': 'the-dance-of-life.jpg'
    },
    {
      'title': 'Sagebrush Trail',
      'poster': 'sagebrush-trail.jpg'
    },
    {
      'title': 'The Man with the Golden Arm',
      'poster': 'the-man-with-the-golden-arm.jpg'
    },
    {
      'title': 'Santa Claus Conquers the Martians',
      'poster': 'santa-claus-conquers-the-martians.jpg'
    },
    {
      'title': 'Popeye the Sailor Meets Sindbad the Sailor',
      'poster': 'popeye-meets-sinbad.png'
    },
    {
      'title': 'The Great Flamarion',
      'poster': 'the-great-flamarion.jpg'
    },
    {
      'title': 'Made for Each Other',
      'poster': 'made-for-each-other.png'
    }
  ];

  const randomIndex = getRandomInteger(0, filmsTitlesAndPosters.length - 1);
  return filmsTitlesAndPosters[randomIndex];
};
