import { SortType } from '../constants.js';
import AbstractView from '../framework/view/abstract-view.js';

const DISABLED_SORT_TYPES = [SortType.OFFERS, SortType.EVENT];

const createSortingItemTemplate = (type, checkedSortType) => `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}"
    class="trip-sort__input  visually-hidden"
    type="radio"
    data-sort-type=${type}
    name="trip-sort" value="sort-${type}"
    ${DISABLED_SORT_TYPES.includes(type) ? 'disabled' : ''}
    ${type === checkedSortType ? 'checked' : ''}
    >
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>
`;

const createSortingTemplate = (checkedSortType) => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${Object.values(SortType).map((type) => createSortingItemTemplate(type, checkedSortType)).join('').toLowerCase()}
    </form>
`;

export default class Sorting extends AbstractView {
  #handleSortTypeChange = null;
  #checkedSortType = null;

  constructor({checkedSortType, onSortTypeChange}) {
    super();
    this.#checkedSortType = checkedSortType;
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortingTemplate(this.#checkedSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    if (!evt.target.matches('input[name="trip-sort"]')) {
      return;
    }
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
