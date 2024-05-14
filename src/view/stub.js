import AbstractView from '../framework/view/abstract-view.js';

const createStubTemplate = (text) => `
    <p class="trip-events__msg">${text}</p>
`;

export default class Stub extends AbstractView {
  #text = null;
  constructor(text) {
    super();
    this.#text = text;
  }

  get template() {
    return createStubTemplate(this.#text);
  }
}

