import { createImageSection, createOfferItemTemplate, createTypeGroupTemplate } from './editor-form-elements.js';
import { GROUP_TYPES } from '../constants.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { makeCapitalized } from '../utils/common.js';
import { humanizePointDueDate, DateFormat } from '../utils/date-format-utils.js';

const createEditorPointTemplate = (state, allDestinations) => {
  const { basePrice, type, dateFrom, dateTo, offers, typeOffers } = state;
  const { name, description, pictures } = state.destination;

  const startTime = humanizePointDueDate(dateFrom, DateFormat.FULL_DATE_FORMAT);
  const endTime = humanizePointDueDate(dateTo, DateFormat.FULL_DATE_FORMAT);

  const typeName = makeCapitalized(type);
  const imageSection = createImageSection(pictures);

  const createAllOffers = typeOffers.offers
    .map((offer) => {
      const checkedClassName = offers.includes(offer.id) ? 'checked' : '';
      return createOfferItemTemplate(type, offer.title, offer.price, offer.id, checkedClassName);
    }).join('');

  const createSectionOffers = typeOffers.offers.length > 0
    ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${createAllOffers}
        </div>
      </section>
    `
    : '';

  const createDesinationTemplate = allDestinations
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
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTime}">
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
        ${createSectionOffers}

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
          ${imageSection}
        </section>
      </section>
    </form>
  </li>`
  );
};

export default class EditorPoint extends AbstractStatefulView {
  #allOffers = null;
  #allDestinations = [];

  #handleFormSubmit = null;
  #handleEditRollUp = null;

  constructor({point, typeOffers, pointDestination, allOffers, allDestinations, onFormSubmit, onEditRollUp}) {
    super();
    this._setState(EditorPoint.parsePointToState(point, pointDestination, typeOffers));
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleEditRollUp = onEditRollUp;

    this._restoreHandlers();
  }

  get template() {
    return createEditorPointTemplate(this._state, this.#allDestinations);
  }

  _restoreHandlers() {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editRollUpHandler);

    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeListChangeHandler);

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);

    this.element.querySelector('.event__input--price')
      .addEventListener('input', this.#priceChangeHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditorPoint.parseStateToPoint(this._state));
  };

  #editRollUpHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditRollUp(EditorPoint.parseStateToPoint(this._state));
  };

  #typeListChangeHandler = (evt) => {
    evt.preventDefault();
    const targetType = evt.target.value;
    const typeOffers = this.#allOffers.find((item) => item.type === targetType);
    this.updateElement({
      type: targetType,
      typeOffers: typeOffers,
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const targetDestination = evt.target.value;
    const newDestination = this.#allDestinations.find((item) => item.name === targetDestination);
    this.updateElement({
      destination: newDestination.id,
      description: newDestination.description,
      name: newDestination.name,
      pictures: newDestination.pictures,
    });
  };

  #priceChangeHandler = (evt) => {
    evt.preventDefault();
    const newPrice = evt.target.value;
    this._setState({
      basePrice: newPrice
    });
  };

  static parsePointToState(point, pointDestination, typeOffers) {
    return {
      ...point,
      destination: pointDestination,
      typeOffers
    };
  }

  static parseStateToPoint(state) {
    const point = {...state};

    delete point.destination;
    delete point.typeOffers;

    return point;
  }
}
