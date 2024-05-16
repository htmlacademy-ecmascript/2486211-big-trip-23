import EventsPoint from '../view/events-point.js';
import EditorPoint from '../view/editor-point.js';
import { render, replace } from '../framework/render.js';

export default class PointPresenter {
  #eventsListComponent = null;
  #pointsModel = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #point = null;

  constructor({eventsListComponent, pointsModel}) {
    this.#eventsListComponent = eventsListComponent;
    this.#pointsModel = pointsModel;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new EventsPoint({
      point: this.#point,
      offers: [...this.#pointsModel.getOffersById(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationsById(point.destination),
      onEditClick: () => this.#handleEditClick(),
    });

    this.#pointEditComponent = new EditorPoint({
      point: this.#point,
      allOffers: this.#pointsModel.getOffersByType(point.type),
      pointDestination: this.#pointsModel.getDestinationsById(point.destination),
      allDestinations: this.#pointsModel.destinations,
      onFormSubmit: () => this.#handleFormClick(),
      onEditRollUp: () => this.#handleFormClick(),
    });

    render(this.#pointComponent, this.#eventsListComponent.element);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #replacePointToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFormClick = () => {
    this.#replaceFormToPoint();
  };

  #handleEditClick() {
    this.#replacePointToForm();
  }
}
