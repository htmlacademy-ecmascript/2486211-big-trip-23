import NewPointPresenter from './new-point-presenter.js';
import PointPresenter from './point-presenter.js';
import EventsList from '../view/events-list.js';
import Sorting from '../view/sorting.js';
import Stub from '../view/stub.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import { remove, render } from '../framework/render.js';
import { FilterType, SortType, StubText, TimeLimit, UpdateType, UserAction } from '../constants.js';
import { sortByDay, sortByPrice, sortByTime } from '../utils/sort.js';
import { filter } from '../utils/filter.js';
import TripInfoPresenter from './trip-info-presenter.js';


export default class PagePresenter {
  #eventsListContainer = null;
  #tripMainContainer = null;

  #pointsModel = null;
  #filterModel = null;

  #sorting = null;
  #listEmpty = null;
  #loadingComponent = null;
  #loadingErrorComponent = null;

  #pointPresenters = new Map();
  #newPointPresenter = null;
  #tripInfoPresenter = null;
  #newPointButton = null;
  #currentSortType = SortType.DAY;
  #filterType = FilterType.EVERYTHING;
  #loadingStub = Object.keys(StubText).find((item) => item === 'LOADING');
  #loadingErrorStub = Object.keys(StubText).find((item) => item === 'LOADING_ERROR');
  #isLoading = true;

  #eventsListComponent = new EventsList();
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({tripMainContainer, eventsListContainer, pointsModel, filterModel, newPointButtonComponent, onNewPointDestroy}) {
    this.#tripMainContainer = tripMainContainer;
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#newPointButton = newPointButtonComponent.element;

    this.#newPointPresenter = new NewPointPresenter({
      eventListContainer: this.#eventsListComponent.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy,
      onReset: this.#handleFormReset,
    });

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        filteredPoints.sort(sortByTime);
        break;
      case SortType.PRICE:
        filteredPoints.sort(sortByPrice);
        break;
      case SortType.DAY:
        filteredPoints.sort(sortByDay);
        break;
    }

    return filteredPoints;
  }

  get error() {
    return this.#pointsModel.error;
  }

  init() {
    this.#renderPage();
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterType = FilterType.EVERYTHING;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init();
    if (this.#listEmpty) {
      remove(this.#listEmpty);
    }
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      eventsListComponent: this.#eventsListComponent.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints(points) {
    points.forEach((point) => this.#renderPoint(point));
  }

  #renderTripInfo() {
    this.#tripInfoPresenter = new TripInfoPresenter({
      pointsModel: this.#pointsModel,
      tripMainContainer: this.#tripMainContainer,
    });
    this.#tripInfoPresenter.init();
  }

  #renderListEmpty() {
    this.#listEmpty = new Stub({
      filterType: this.#filterType
    });
    render(this.#listEmpty, this.#eventsListContainer);
  }

  #renderLoading() {
    this.#loadingComponent = new Stub({
      filterType: this.#loadingStub,
    });
    render(this.#loadingComponent, this.#eventsListContainer);
  }

  #renderLoadingError() {
    this.#loadingErrorComponent = new Stub({
      filterType: this.#loadingErrorStub,
    });
    this.#newPointButton.disabled = true;
    render(this.#loadingErrorComponent, this.#eventsListContainer);
  }

  #renderSorting() {
    this.#sorting = new Sorting({
      checkedSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sorting, this.#eventsListContainer);
  }

  #renderEventsList() {
    render(this.#eventsListComponent, this.#eventsListContainer);
    this.#renderPoints(this.points);
  }

  #renderPage() {

    if (this.error) {
      this.#renderLoadingError();
      return;
    }

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (this.points.length === 0) {
      this.#renderListEmpty();
    }
    if (this.points.length > 0) {
      this.#renderSorting();
    }
    this.#renderTripInfo();
    this.#renderEventsList();
  }

  #clearPage({resetSortType = false} = {}) {
    this.#tripInfoPresenter.destroy();
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sorting);
    remove(this.#loadingComponent);

    if (this.#listEmpty) {
      remove(this.#listEmpty);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #handleFormReset = () => {
    if (this.points.length === 0) {
      remove(this.#sorting);
      this.#renderListEmpty();
    }
  };

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(update.id).setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch(err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch(err) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(update.id).setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch(err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
    }
    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearPage();
        this.#renderPage();
        break;
      case UpdateType.MAJOR:
        this.#clearPage({resetSortType: true});
        this.#renderPage();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderPage();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#clearPage();
    this.#renderPage();
  };
}
