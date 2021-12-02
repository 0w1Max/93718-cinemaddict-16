import {getRandomInteger} from '../utils.js';

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

export {generateComments};
