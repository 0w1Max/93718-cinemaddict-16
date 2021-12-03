import {
  COMMENTS_TEXT,
  EMOJI,
  EMOJI_DIR
} from './data.js';

import {getRandomInteger} from '../utils.js';

const generateTextComments = () => {
  const randomIndex = getRandomInteger(0, COMMENTS_TEXT.length - 1);

  return COMMENTS_TEXT[randomIndex];
};

const generateEmoji= () => {
  const randomIndex = getRandomInteger(0, EMOJI.length - 1);

  return EMOJI[randomIndex];
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
