import EventsListPresenter from './presenter/events-list-presenter.js';
import TripInfo from './view/trip-info.js';
import Filters from './view/filters.js';
import PointsModel from './model/points-model.js';
import { RenderPosition, render } from './framework/render.js';
import { generateFilter } from './mock/filter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsSectionElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const eventsListPresenter = new EventsListPresenter({
  eventsListContainer: tripEventsSectionElement,
  pointsModel,
});

const filters = generateFilter(pointsModel.points);

render(new TripInfo(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new Filters({filters}), tripFiltersElement);
eventsListPresenter.init();
