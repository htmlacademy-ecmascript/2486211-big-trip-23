import AbstractView from '../framework/view/abstract-view.js';
import { StubText } from '../constants.js';

const createStubTemplate = (filterType) => {
  const listEmptyValue = StubText[filterType];
  return (`
  <p class="trip-events__msg">${listEmptyValue}</p>
`);
};

export default class Stub extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createStubTemplate(this.#filterType);
  }
}

