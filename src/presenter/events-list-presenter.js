import EventsListView from '../view/events-list.js';
import EventsPointView from '../view/events-point.js';
import EditorPointView from '../view/editor-point.js';
// import NewPointView from '../view/new-point.js';
import { render } from '../render.js';


export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor({eventsListContainer, pointsModel}) {
    this.eventsListContainer = eventsListContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.eventsListPoints = [...this.pointsModel.getPoints()];

    render(this.eventsListComponent, this.eventsListContainer);
    render(new EditorPointView({point: this.eventsListPoints[0]}), this.eventsListComponent.getElement());
    // render(new NewPointView(), this.eventsListComponent.getElement());

    for (let i = 1; i < this.eventsListPoints.length; i++) {
      render(new EventsPointView({point: this.eventsListPoints[i]}), this.eventsListComponent.getElement());
    }
  }
}
