import EventsList from '../view/events-list.js';
import { render } from '../framework/render.js';
import Sorting from '../view/sorting.js';
import Stub from '../view/stub.js';
import { StubText } from '../constants.js';
import PointPresenter from './point-presenter.js';


export default class PagePresenter {
  #eventsListContainer = null;
  #pointsModel = null;
  #eventsListPoints = [];


  #eventsListComponent = new EventsList();
  #sorting = new Sorting();
  #listEmpty = new Stub(StubText.EVERYTHING);

  constructor({eventsListContainer, pointsModel}) {
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#eventsListPoints = [...this.#pointsModel.points];
    this.#renderPage();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      eventsListComponent: this.#eventsListComponent,
      pointsModel: this.#pointsModel,
    });
    pointPresenter.init(point);
  }

  #renderPoints() {
    for (let i = 0; i < this.#eventsListPoints.length; i++) {
      this.#renderPoint(this.#eventsListPoints[i]);
    }
  }

  #renderListEmpty() {
    render(this.#listEmpty, this.#eventsListContainer);
  }

  #renderSorting() {
    render(this.#sorting, this.#eventsListContainer);
  }

  #renderEventsList() {
    render(this.#eventsListComponent, this.#eventsListContainer);
    this.#renderPoints();
  }

  #renderPage() {

    if (this.#eventsListPoints.length === 0) {
      this.#renderListEmpty();
      return;
    }
    this.#renderSorting();
    this.#renderEventsList();
  }
}
