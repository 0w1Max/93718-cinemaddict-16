const createFilmDetailsRow = (term, cell) => (
  `<tr class="film-details__row">
    <td class="film-details__term">${term}</td>
    <td class="film-details__cell">${cell}</td>
  </tr>`
);

const createGenreElement = (genre) => `<span class="film-details__genre">${genre}</span>`;

const genreText = (genre) => {
  if (genre.length > 1) {
    return 'Genres';
  }
  return 'Genre';
};

const createFilmDetailsElement = (film) => {
  const {
    title,
    poster,
    ratingAge,
    ratingTotal,
    director,
    writers,
    actors,
    releaseDate,
    runTime,
    country,
    genres,
    description,
    comments
  } = film;

  const genresElemet = genres.map(createGenreElement).join('');

  return `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${poster}" alt="">

              <p class="film-details__age">${ratingAge}+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${ratingTotal}</p>
                </div>
              </div>

              <table class="film-details__table">
                ${createFilmDetailsRow('Director', director)}
                ${createFilmDetailsRow('Writers', writers)}
                ${createFilmDetailsRow('Actors', actors)}
                ${createFilmDetailsRow('Release Date', releaseDate)}
                ${createFilmDetailsRow('RunTime', runTime)}
                ${createFilmDetailsRow('Country', country)}
                ${createFilmDetailsRow(genreText(genres), genresElemet)}
              </table>

              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
            <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
            <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
          </section>
        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">
              Comments <span class="film-details__comments-count">
                ${comments.length}
              </span>
            </h3>
            <ul class="film-details__comments-list">

            </ul>

            <div class="film-details__new-comment">
              <div class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`;
};

const createCommentsElement = (comment) => {
  const {
    commentText,
    emoji,
    emojiUrl,
    commentAuthor,
    commentDay
  } = comment;

  return `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="${emojiUrl}" width="55" height="55" alt="emoji-${emoji}">
            </span>
            <div>
              <p class="film-details__comment-text">${commentText}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${commentAuthor}</span>
                <span class="film-details__comment-day">${commentDay}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
        `;
};

export {createFilmDetailsElement, createCommentsElement};
