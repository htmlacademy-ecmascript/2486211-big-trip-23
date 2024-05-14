import EventsList from '../view/events-list.js';
import EventsPoint from '../view/events-point.js';
import EditorPoint from '../view/editor-point.js';
import { render, replace } from '../framework/render.js';
import Sorting from '../view/sorting.js';
import Stub from '../view/stub.js';
import { StubText } from '../constants.js';


export default class EventsListPresenter {
  #eventsListContainer = null;
  #pointsModel = null;
  #eventsListPoints = [];


  #eventsListComponent = new EventsList();
  #sorting = new Sorting();
  #listEmpty = new Stub(StubText.EVERTHING);

  constructor({eventsListContainer, pointsModel}) {
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#eventsListPoints = [...this.#pointsModel.points];
    this.#renderEvents();
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const hideEditorPoint = () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const showEditorPoint = () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    };

    const pointComponent = new EventsPoint({
      point,
      offers: [...this.#pointsModel.getOffersById(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationsById(point.destination),
      onEditClick: () => showEditorPoint(),
    });

    const pointEditComponent = new EditorPoint({
      point,
      allOffers: this.#pointsModel.getOffersByType(point.type),
      pointDestination: this.#pointsModel.getDestinationsById(point.destination),
      allDestinations: this.#pointsModel.destinations,
      onFormSubmit: () => hideEditorPoint(),
      onEditRollUp: () => hideEditorPoint(),
    });

    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#eventsListComponent.element);
  }

  #renderEvents() {

    if (this.#eventsListPoints.length === 0) {
      render(this.#listEmpty, this.#eventsListContainer);
      return;
    }
    render(this.#sorting, this.#eventsListContainer);
    render(this.#eventsListComponent, this.#eventsListContainer);
    for (let i = 0; i < this.#eventsListPoints.length; i++) {
      this.#renderPoint(this.#eventsListPoints[i]);
    }
  }
}
