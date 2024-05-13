import EventsListPresenter from './presenter/events-list-presenter.js';
import TripInfo from './view/trip-info.js';
import Filters from './view/filters.js';
import PointsModel from './model/points-model.js';
import { RenderPosition, render } from './framework/render.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsSectionElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const eventsListPresenter = new EventsListPresenter({
  eventsListContainer: tripEventsSectionElement,
  pointsModel,
});

render(new TripInfo(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new Filters(), tripFiltersElement);
eventsListPresenter.init();
