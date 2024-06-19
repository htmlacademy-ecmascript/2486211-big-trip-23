import AbstractView from '../framework/view/abstract-view.js';
import { DateFormat, humanizePointDueDate } from '../utils/date-format.js';

const createTripInfoTemplate = (destinations, dates, cost) => {

  const createDatesSection = () => {
    if (dates) {
      const startRoute = humanizePointDueDate(dates[0], DateFormat.DATE_FOR_TRIP_INFO);
      const endRoute = humanizePointDueDate(dates[1], DateFormat.DATE_FOR_TRIP_INFO);
      return `<p class="trip-info__dates">${startRoute}&nbsp;&mdash;&nbsp;${endRoute}</p>`;
    }
    return '';
  };

  const createTitleSection = (items) => {
    if (items.length === 0 || !items) {
      return '';
    } else if (items.length === 1) {
      return `<h1 class="trip-info__title">${items[0]}</h1>`;
    } else if (items.length < 3) {
      return `<h1 class="trip-info__title">${items[0]} &mdash; &mdash; ${items[1]}</h1>`;
    } else if (items.length === 3) {
      return `<h1 class="trip-info__title">${items[0]} &mdash; ${items[1]} &mdash; ${items[2]}</h1>`;
    }
  };

  const titleSection = createTitleSection(destinations);

  const datesSection = createDatesSection();

  const costSection = cost ? `Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>` : '';

  return (`
    <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      ${titleSection}

      ${datesSection}
    </div>

    <p class="trip-info__cost">
      ${costSection}
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
