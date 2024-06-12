import PagePresenter from './presenter/page-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripInfo from './view/trip-info.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import { RenderPosition, render } from './framework/render.js';
import NewPointButton from './view/new-point-button.js';
import PointsApiService from './server/points-api-service.js';

const END_POINT = 'https://23.objects.htmlacademy.pro/big-trip';
const AUTHORIZATION = 'Basic eksy6jld7dw';

const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsSectionElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const filterModel = new FilterModel();

const pagePresenter = new PagePresenter({
  eventsListContainer: tripEventsSectionElement,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose,
});
const filterPresenter = new FilterPresenter({
  filterContainer: tripFiltersElement,
  filterModel,
  pointsModel
});
const newPointButtonComponent = new NewPointButton({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  pagePresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(new TripInfo(), tripMainElement, RenderPosition.AFTERBEGIN);

filterPresenter.init();
pagePresenter.init();
pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, tripMainElement);
  });
