import PagePresenter from './presenter/page-presenter.js';
import TripInfo from './view/trip-info.js';
import Filters from './view/filters.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import { RenderPosition, render } from './framework/render.js';

const filters = [
  {
    type: 'Everything',
    count: 0,
  },
];

const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsSectionElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const pagePresenter = new PagePresenter({
  eventsListContainer: tripEventsSectionElement,
  pointsModel,
});

render(new TripInfo(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new Filters({
  filters,
  currentFilterType: 'Everything',
  onFilterTypeChange: () => {}
}), tripFiltersElement);
pagePresenter.init();
