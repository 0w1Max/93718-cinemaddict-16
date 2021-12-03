import {RenderPosition, renderTemplate} from './render.js';
import {createProfileElement} from './view/profile-view.js';
import {createNavElement, createSortElement} from './view/menu-view.js';
import {createFilmsListElement} from './view/films-list-view.js';
import {createFilmCardElement} from './view/film-card-view.js';
import {createShowMoreButtonElement} from './view/show-more-buttom-view.js';
import {createFooterStatisticsElement} from './view/footer-statistics-view.js';
import {createFilmDetailsElement, createCommentsElement} from './view/film-details-view.js';
import {generateFilm} from './mock/films-data.js';
import {generateComments} from './mock/comments-data.js';

const FILMS_COUNT = 28;
const MAX_FILMS_LINE = 5;

const films = Array.from({length: FILMS_COUNT}, generateFilm);
const comments = Array.from({length: films[0].comments.length}, generateComments);
// console.log(films);
// console.log(comments);

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

renderTemplate(headerElement, createProfileElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createNavElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createSortElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createFilmsListElement(), RenderPosition.BEFOREEND);

const filmsListContainerElement = document.querySelector('.films-list__container');

for (let index = 0; index < MAX_FILMS_LINE; index++) {
  renderTemplate(filmsListContainerElement, createFilmCardElement(films[index]), RenderPosition.BEFOREEND);
}

renderTemplate(footerElement, createFooterStatisticsElement(), RenderPosition.BEFOREEND);
renderTemplate(footerElement, createFilmDetailsElement(films[0]), RenderPosition.AFTEREND);

// const filmDetailsElement = document.querySelector('.film-details');
const filmCommentsElement = document.querySelector('.film-details__comments-list');

for (let index = 0; index < films[0].comments.length; index++) {
  renderTemplate(filmCommentsElement, createCommentsElement(comments[index]), RenderPosition.BEFOREEND);
}

// filmDetailsElement.style.display = 'none';

if (films.length > MAX_FILMS_LINE) {
  let renderedFilmCount = MAX_FILMS_LINE;

  renderTemplate(filmsListContainerElement, createShowMoreButtonElement(), RenderPosition.AFTEREND);

  const showMoreButton = document.querySelector('.films-list__show-more');

  showMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + MAX_FILMS_LINE)
      .forEach((film) => renderTemplate(filmsListContainerElement, createFilmCardElement(film), RenderPosition.BEFOREEND));

    renderedFilmCount += MAX_FILMS_LINE;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });
}
