import {getRandomInteger} from '../utils.js';

const generateTextComments = () => {
  const textComments = [
    'Interesting setting and a good cast',
    'Booooooooooring',
    'Very very old. Meh',
    'Almost two hours? Seriously?',
    'LOL'
  ];

  const randomIndex = getRandomInteger(0, textComments.length - 1);

  return textComments.filter((comment, index) => index <= randomIndex);
};

const generateEmoji= () => {
  const emoji = [
    'angry',
    'puke',
    'sleeping',
    'smile'
  ];

  const randomIndex = getRandomInteger(0, emoji.length - 1);

  return emoji[randomIndex];
};

const generateComments = () => {
  const filmComments = {
    'text': generateTextComments(),
    'emoji': generateEmoji
  };

  return filmComments;
};

export {generateTextComments, generateComments};
