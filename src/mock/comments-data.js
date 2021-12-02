import {getRandomInteger} from '../utils.js';

const EMOJI_DIR = '/images/emoji/';

const generateTextComments = () => {
  const textComments = [
    'Interesting setting and a good cast',
    'Booooooooooring',
    'Very very old. Meh',
    'Almost two hours? Seriously?',
    'LOL'
  ];

  const randomIndex = getRandomInteger(0, textComments.length - 1);

  return textComments[randomIndex];
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
  const newEmoji = generateEmoji();

  return {
    commentText: generateTextComments(),
    emoji: newEmoji,
    emojiUrl: `${EMOJI_DIR}${newEmoji}.png`
  };
};

export {generateComments};
