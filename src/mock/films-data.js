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

const generateDescription = () => {
  const filmDescriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'Cras aliquet varius magna, non porta ligula feugiat eget. ',
    'Fusce tristique felis at fermentum pharetra. ',
    'Aliquam id orci ut lectus varius viverra. ',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. ',
    'Sed sed nisi sed augue convallis suscipit in sed felis. ',
    'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. ',
    'In rutrum ac purus sit amet tempus.'
  ];

  const randomIndex = getRandomInteger(0, filmDescriptions.length - 1);

  return filmDescriptions.filter((description, index) => index <= randomIndex).join('');
};

const generateComments = () => {
  const filmComments = [
    'Interesting setting and a good cast',
    'Booooooooooring',
    'Very very old. Meh',
    'Almost two hours? Seriously?',
    'LOL'
  ];

  const randomIndex = getRandomInteger(0, filmComments.length - 1);

  return filmComments.filter((description, index) => index <= randomIndex);
};

const generateFilm = () => {
  const newFilmTitleAndPoster = generateFilmTitleAndPoster();

  return {
    title: newFilmTitleAndPoster.title,
    poster: `${POSTERS_DIR}${newFilmTitleAndPoster.poster}`,
    description: generateDescription(),
    comments: generateComments().length
  };
};

export {generateFilm};
