import EventsList from '../view/events-list.js';
import EventsPoint from '../view/events-point.js';
import EditorPoint from '../view/editor-point.js';
import { render } from '../framework/render.js';


export default class EventsListPresenter {
  eventsListComponent = new EventsList();

  constructor({eventsListContainer, pointsModel}) {
    this.eventsListContainer = eventsListContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.eventsListPoints = [...this.pointsModel.getPoints()];

    render(this.eventsListComponent, this.eventsListContainer);
    const editorPoint = new EditorPoint({
      point: this.eventsListPoints[0],
      allOffers: this.pointsModel.getOffersByType(this.eventsListPoints[0].type),
      pointDestination: this.pointsModel.getDestinationsById(this.eventsListPoints[0].destination),
      allDestination: this.pointsModel.getDestinations()
    });
    render(editorPoint, this.eventsListComponent.element);

    for (let i = 1; i < this.eventsListPoints.length; i++) {
      const point = new EventsPoint({
        point: this.eventsListPoints[i],
        offers: [...this.pointsModel.getOffersById(this.eventsListPoints[i].type, this.eventsListPoints[i].offers)],
        destination: this.pointsModel.getDestinationsById(this.eventsListPoints[i].destination)
      });
      render(point, this.eventsListComponent.element);
    }
  }
}
