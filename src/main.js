import {RenderPosition, renderTemplate} from './render.js';
import {createProfileElement} from './view/profile-view.js';
import {createNavElement, createSortElement} from './view/menu-view.js';
import {createFilmsListElement} from './view/films-list-view.js';
import {createFilmCardElement} from './view/film-card-view.js';
import {createButtonShowMore} from './view/show-more-view.js';

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

renderTemplate(headerElement, createProfileElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createNavElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createSortElement(), RenderPosition.BEFOREEND);

const FILMS_COUNT = 5;
renderTemplate(mainElement, createFilmsListElement(), RenderPosition.BEFOREEND);
const filmsListContainerElement = document.querySelector('.films-list__container');

for (let index = 0; index < FILMS_COUNT; index++) {
  renderTemplate(filmsListContainerElement, createFilmCardElement(), RenderPosition.BEFOREEND);
}

const filmsListElement = document.querySelector('.films-list');
renderTemplate(filmsListElement, createButtonShowMore(), RenderPosition.BEFOREEND);
