import { createOfferItemTemplate, createTypeGroupTemplate } from './editor-form-elements.js';
import { GROUP_TYPES } from '../constants.js';
import AbstractView from '../framework/view/abstract-view.js';

const createEditorPointTemplate = (point, allOffers, pointDestination, allDestination) => {
  const { basePrice, type } = point;
  const typeName = type[0].toUpperCase() + type.slice(1, type.length);
  const { name, description } = pointDestination;
  const createAllOffers = allOffers.offers
    .map((offer) => {
      const checkedClassName = point.offers.includes(offer.id) ? 'checked' : '';
      return createOfferItemTemplate(allOffers.type, offer.title, offer.price, checkedClassName);
    }).join('');

  const createDesinationTemplate = allDestination
    .map((item) => `<option value="${item.name}"></option>`).join('');

  const createTypeList = GROUP_TYPES
    .map((group) => {
      const checkedClassName = group === typeName ? 'checked' : '';
      return createTypeGroupTemplate(group, checkedClassName);
    }).join('');

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createTypeList}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${typeName}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${createDesinationTemplate}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${createAllOffers}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
        </section>
      </section>
    </form>
  </li>`
  );
};

export default class EditorPoint extends AbstractView {
  #point = null;
  #allOffers = null;
  #pointDestination = null;
  #allDestination = null;

  #handleFormSubmit = null;

  constructor({point, allOffers, pointDestination, allDestination, onFormSubmit}) {
    super();
    this.#point = point;
    this.#allOffers = allOffers;
    this.#pointDestination = pointDestination;
    this.#allDestination = allDestination;
    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createEditorPointTemplate(this.#point, this.#allOffers, this.#pointDestination, this.#allDestination);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };
}
