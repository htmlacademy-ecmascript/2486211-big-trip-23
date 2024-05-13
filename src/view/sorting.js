import { SORT_TYPES } from '../constants.js';
import AbstractView from '../framework/view/abstract-view.js';

const createSortingItemTemplate = (type) => `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}" checked>
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>
`;

const createSortingTemplate = () => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORT_TYPES.map((type) => createSortingItemTemplate(type)).join('').toLowerCase()}
    </form>
`;

export default class Sorting extends AbstractView {
  get template() {
    return createSortingTemplate();
  }
}
