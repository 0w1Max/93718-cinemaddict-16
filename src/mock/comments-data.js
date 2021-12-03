import {
  COMMENTS_TEXT,
  EMOJI,
  EMOJI_DIR,
  COMMENT_AUTHOR
} from './data.js';

import {getRandomInteger} from '../utils.js';
import dayjs from 'dayjs';

const generateTextComments = () => {
  const randomIndex = getRandomInteger(0, COMMENTS_TEXT.length - 1);

  return COMMENTS_TEXT[randomIndex];
};

const generateEmoji = () => {
  const randomIndex = getRandomInteger(0, EMOJI.length - 1);

  return EMOJI[randomIndex];
};

const generateAuthorComment = () => {
  const randomIndex = getRandomInteger(0, COMMENT_AUTHOR.length - 1);

  return COMMENT_AUTHOR[randomIndex];
};

const generateComments = () => {
  const newEmoji = generateEmoji();

  return {
    commentText: generateTextComments(),
    emoji: newEmoji,
    emojiUrl: `${EMOJI_DIR}${newEmoji}.png`,
    commentAuthor: generateAuthorComment(),
    commentDay: dayjs().format('YYYY/MM/DD HH:mm')
  };
};

export {generateComments};
