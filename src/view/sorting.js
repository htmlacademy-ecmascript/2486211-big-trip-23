import { SortType } from '../constants.js';
import AbstractView from '../framework/view/abstract-view.js';

const createSortingItemTemplate = (type) => `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" data-sort-type=${type} name="trip-sort" value="sort-${type}" checked>
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>
`;

const createSortingTemplate = () => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${Object.values(SortType).map((type) => createSortingItemTemplate(type)).join('').toLowerCase()}
    </form>
`;

export default class Sorting extends AbstractView {
  #handleSortTypeChange = null;

  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortingTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.matches('input[name="trip-sort"]')) {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
