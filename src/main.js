import {RenderPosition, renderTemplate} from './render.js';
import {createNavElement, createSortElement} from './view/menu-view.js';

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

renderTemplate(mainElement, createNavElement(), RenderPosition.BEFOREEND);
renderTemplate(mainElement, createSortElement(), RenderPosition.BEFOREEND);
