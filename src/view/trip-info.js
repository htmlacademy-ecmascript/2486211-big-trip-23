import AbstractView from '../framework/view/abstract-view.js';
import { DateFormat, humanizePointDueDate } from '../utils/date-format.js';

const createTripInfoTemplate = (destinations, dates, cost) => {
  const startRoute = humanizePointDueDate(dates[0], DateFormat.DATE_FOR_TRIP_INFO);
  const endRoute = humanizePointDueDate(dates[1], DateFormat.DATE_FOR_TRIP_INFO);

  const titleSection = destinations.length < 3
    ? `<h1 class="trip-info__title">${destinations[0]} &mdash; ... &mdash; ${destinations[1]}</h1>`
    : `<h1 class="trip-info__title">${destinations[0]} &mdash; ${destinations[1]} &mdash; ${destinations[2]}</h1>`;

  const datesSection = `<p class="trip-info__dates">${startRoute}&nbsp;&mdash;&nbsp;${endRoute}</p>`;

  return (`
    <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      ${titleSection}

      ${datesSection}
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  </section>
`);
};

export default class TripInfo extends AbstractView {
  #destinations = null;
  #dates = null;
  #cost = null;

  constructor({destinations, dates, cost}) {
    super();
    this.#destinations = destinations;
    this.#dates = dates;
    this.#cost = cost;
  }

  get template() {
    return createTripInfoTemplate(this.#destinations, this.#dates, this.#cost);
  }
}
