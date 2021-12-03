const createFilmCardDescription = (description) => {
  const newDescription = description.length > 140 ? `<p class="film-card__description">
  ${description.substring(0, 139)}...</p>` : `<p class="film-card__description">${description}</p>`;

  return newDescription;
};

const createFilmCardControlButton = (title, nameButton, isActive) => {
  const activeClass = isActive ? 'film-card__controls-item--active' : '';

  return `<button class="film-card__controls-item ${activeClass} film-card__controls-item--${nameButton}"
  type="button">${title}</button>`;
};

const createFilmCardElement = (film) => {
  const {title,
    poster,
    ratingTotal,
    releaseDate,
    runTime,
    genres,
    description,
    comments,
    watchlist,
    watched,
    favorite
  } = film;

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${ratingTotal}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseDate.format('YYYY')}</span>
        <span class="film-card__duration">${runTime}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${createFilmCardDescription(description)}</p>
      <span class="film-card__comments">${comments.length} comments</span>
    </a>
    <div class="film-card__controls">
      ${createFilmCardControlButton('Add to watchlist', 'add-to-watchlist', watchlist)}
      ${createFilmCardControlButton('Mark as watched', 'mark-as-watched', watched)}
      ${createFilmCardControlButton('Mark as favorite', 'favorite', favorite)}
    </div>
  </article>`;
};

export {createFilmCardElement};
