import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = (filter, currentFilterType) => {
  const { type, count } = filter;
  return (`
  <div class="trip-filters__filter">
    <input id="filter-everything"
    class="trip-filters__filter-input  visually-hidden"
    type="radio"
    name="trip-filter"
    value="${type}"
    ${type === currentFilterType ? 'checked' : ''}
    ${count === 0 ? 'disabled' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>
`);
};

const createFiltersTemplate = (filterItems, currentFilterType) => `
    <form class="trip-filters" action="#" method="get">
      ${filterItems.map((filter) => createFilterItemTemplate(filter, currentFilterType)).join('')}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
`;

export default class Filters extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
