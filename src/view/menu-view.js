const createFilterElement = (title, itemName, count) => (
  `<a href="#${itemName}" class="main-navigation__item">${title}
  <span class="main-navigation__item-count">${count}</span></a>`
);

const createNavElement = (watchlistCount, historyCount, favoritesCount) => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      ${createFilterElement('Watchlist', 'watchlist', watchlistCount)}
      ${createFilterElement('History', 'history', historyCount)}
      ${createFilterElement('Favorites', 'favorites', favoritesCount)}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

const createSortElement = () => (
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);

export {createNavElement, createSortElement};
