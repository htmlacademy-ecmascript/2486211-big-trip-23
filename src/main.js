import PagePresenter from './presenter/page-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripInfo from './view/trip-info.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import { RenderPosition, render } from './framework/render.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsSectionElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const filterModel = new FilterModel();

const pagePresenter = new PagePresenter({
  eventsListContainer: tripEventsSectionElement,
  pointsModel,
  filterModel
});
const filterPresenter = new FilterPresenter({
  filterContainer: tripFiltersElement,
  filterModel,
  pointsModel
});

render(new TripInfo(), tripMainElement, RenderPosition.AFTERBEGIN);

filterPresenter.init();
pagePresenter.init();
