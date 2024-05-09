import { createElement } from '../render.js';
import { FILTER_TYPES } from '../constants.js';
const createFilterItemTemplate = (type) => `
  <div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}">
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>
`;

const createFiltersTemplate = () => `
    <form class="trip-filters" action="#" method="get">
      ${FILTER_TYPES.map((type) => createFilterItemTemplate(type)).join('').toLowerCase()}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
`;

export default class Filters {
  getTemplate() {
    return createFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
