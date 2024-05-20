import EventsList from '../view/events-list.js';
import { render } from '../framework/render.js';
import Sorting from '../view/sorting.js';
import Stub from '../view/stub.js';
import { SortType, StubText } from '../constants.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';
import { sortByDay, sortByPrice, sortByTime } from '../utils/sort.js';


export default class PagePresenter {
  #eventsListContainer = null;
  #pointsModel = null;
  #sorting = null;

  #eventsListPoints = [];
  #sourcedPoints = [];

  #pointPresenters = new Map();
  #defaultSortType = SortType.DAY;

  #eventsListComponent = new EventsList();
  #listEmpty = new Stub(StubText.EVERYTHING);

  constructor({eventsListContainer, pointsModel}) {
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#eventsListPoints = [...this.#pointsModel.points];
    this.#sourcedPoints = [...this.#pointsModel.points];
    this.#renderPage();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      eventsListComponent: this.#eventsListComponent.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    for (let i = 0; i < this.#eventsListPoints.length; i++) {
      this.#renderPoint(this.#eventsListPoints[i]);
    }
  }

  #clearPoints() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderListEmpty() {
    render(this.#listEmpty, this.#eventsListContainer);
  }

  #renderSorting() {
    this.#sorting = new Sorting({
      checkedSortType: this.#defaultSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });
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

  #sortPoints(sortType) {
    switch (sortType) {
      case 'time':
        this.#eventsListPoints.sort(sortByTime);
        break;
      case 'price':
        this.#eventsListPoints.sort(sortByPrice);
        break;
      default:
        this.#eventsListPoints.sort(sortByDay);
    }
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#eventsListPoints = updateItem(this.#eventsListPoints, updatedPoint);
    this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleSortTypeChange = (checkedSortType) => {
    if (this.#defaultSortType === checkedSortType) {
      return;
    }
    this.#defaultSortType = checkedSortType;
    this.#sortPoints(checkedSortType);
    this.#clearPoints();
    this.#renderEventsList();
  };
}
