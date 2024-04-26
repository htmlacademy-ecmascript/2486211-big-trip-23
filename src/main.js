import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import EventsListPresenter from './presenter/events-list-presenter.js';
import SortingView from './view/sorting-view.js';
import { render, RenderPosition } from './render.js';

const tripMainEl = document.querySelector('.trip-main');
const tripFiltersEl = tripMainEl.querySelector('.trip-controls__filters');
const tripEventsSectionEl = document.querySelector('.trip-events');
const eventsListPresenter = new EventsListPresenter({eventsListContainer: tripEventsSectionEl});

render(new TripInfoView(), tripMainEl, RenderPosition.AFTERBEGIN);
render(new FiltersView(), tripFiltersEl);
render(new SortingView(), tripEventsSectionEl);
eventsListPresenter.init();
