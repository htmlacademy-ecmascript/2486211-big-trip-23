import EventsList from '../view/events-list.js';
import EventsPoint from '../view/events-point.js';
import EditorPoint from '../view/editor-point.js';
import { render } from '../framework/render.js';


export default class EventsListPresenter {
  #eventsListContainer = null;
  #pointsModel = null;

  #eventsListComponent = new EventsList();

  #eventsListPoints = [];

  constructor({eventsListContainer, pointsModel}) {
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#eventsListPoints = [...this.#pointsModel.points];

    render(this.#eventsListComponent, this.#eventsListContainer);
    const editorPoint = new EditorPoint({
      point: this.#eventsListPoints[0],
      allOffers: this.#pointsModel.getOffersByType(this.#eventsListPoints[0].type),
      pointDestination: this.#pointsModel.getDestinationsById(this.#eventsListPoints[0].destination),
      allDestination: this.#pointsModel.getDestinations()
    });
    render(editorPoint, this.#eventsListComponent.element);

    for (let i = 1; i < this.#eventsListPoints.length; i++) {
      this.#renderPoint(this.#eventsListPoints[i]);
    }
  }

  #renderPoint(point) {
    const pointComponent = new EventsPoint({
      point,
      offers: [...this.#pointsModel.getOffersById(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationsById(point.destination)
    });
    render(pointComponent, this.#eventsListComponent.element);
  }
}
