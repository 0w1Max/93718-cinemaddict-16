import {RenderPosition, renderTemplate} from './render.js';
import {createProfileElement} from './view/profile-view.js';
import {createNavElement, createSortElement} from './view/menu-view.js';
import {createFilmsListElement} from './view/films-list-view.js';
import {createFilmCardElement} from './view/film-card-view.js';

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

renderTemplate(headerElement, createProfileElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createNavElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createSortElement(), RenderPosition.BEFOREEND);

renderTemplate(mainElement, createFilmsListElement(), RenderPosition.BEFOREEND);
const filmsListElement = document.querySelector('.films-list__container');
for (let index = 0; index < 5; index++) {
  renderTemplate(filmsListElement, createFilmCardElement(), RenderPosition.BEFOREEND);
}
