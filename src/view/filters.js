import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = (filter, isChecked) => {
  const { type, count } = filter;
  return (`
  <div class="trip-filters__filter">
    <input id="filter-everything"
    class="trip-filters__filter-input  visually-hidden"
    type="radio"
    name="trip-filter"
    value="${type}"
    ${isChecked ? 'checked' : ''}
    ${count === 0 ? 'disabled' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>
`);
};

const createFiltersTemplate = (filterItems) => `
    <form class="trip-filters" action="#" method="get">
      ${filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join('').toLowerCase()}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
`;

export default class Filters extends AbstractView {
  #filters = null;

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
