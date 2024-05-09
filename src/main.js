import { render, RenderPosition } from './render.js';
import EventsListPresenter from './presenter/events-list-presenter.js';
import TripInfoView from './view/trip-info.js';
import FiltersView from './view/filters.js';
import SortingView from './view/sorting.js';
import PointsModel from './model/points-model.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsSectionElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const eventsListPresenter = new EventsListPresenter({
  eventsListContainer: tripEventsSectionElement,
  pointsModel,
});

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FiltersView(), tripFiltersElement);
render(new SortingView(), tripEventsSectionElement);
eventsListPresenter.init();
