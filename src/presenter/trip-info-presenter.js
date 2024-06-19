import { RenderPosition, remove, render } from '../framework/render.js';
import { sortByDay } from '../utils/sort.js';
import TripInfo from '../view/trip-info.js';

export default class TripInfoPresenter {
  #pointsModel = null;
  #sortedPoints = null;
  #destinations = null;
  #destinationsName = null;
  #tripMainContainer = null;
  #tripInfoComponent = null;
  #tripDates = null;
  #cost = null;

  constructor({pointsModel, tripMainContainer}) {
    this.#pointsModel = pointsModel;
    this.#tripMainContainer = tripMainContainer;
    this.#sortedPoints = [...this.#pointsModel.points.sort(sortByDay)];
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get destinations() {
    const allDestinations = this.#pointsModel.destinations;
    this.#destinations = this.#sortedPoints.map((point) => allDestinations.find((item) => item.id === point.destination));
    this.#destinationsName = this.#destinations.map((destination) => destination.name);
    if (this.#destinations.length > 3) {
      this.#destinationsName = [
        this.#destinationsName[0],
        this.#destinationsName[this.#destinationsName.length - 1],
      ];
    } else if (this.#destinations.length === 3) {
      this.#destinationsName = [
        this.#destinationsName[0],
        this.#destinationsName[1],
        this.#destinationsName[this.#destinationsName.length - 1],
      ];
    }

    return this.#destinationsName;
  }

  get dates() {

    this.#tripDates = [
      this.#sortedPoints[0].dateFrom,
      this.#sortedPoints[this.#sortedPoints.length - 1].dateTo,
    ];
    return this.#tripDates;
  }

  get cost() {
    const costPoints = this.#sortedPoints.map((point) => {
      const offersPoint = this.#pointsModel.getOffersById(point.type, point.offers);
      const priceOffers = offersPoint.map((offer) => offer.price);
      const cost = priceOffers.reduce((previousValue, currentValue) => previousValue + currentValue, point.basePrice);
      return cost;
    });
    this.#cost = costPoints.reduce((previousValue, currentValue) => previousValue + currentValue);
    return this.#cost;
  }

  init() {
    if (this.#tripInfoComponent !== null) {
      return;
    }

    this.#tripInfoComponent = new TripInfo({
      destinations: this.destinations,
      dates: this.dates,
      cost: this.cost,
    });

    render(this.#tripInfoComponent, this.#tripMainContainer, RenderPosition.AFTERBEGIN);
  }

  destroy() {
    remove(this.#tripInfoComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };
}
