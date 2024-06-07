import { FilterType } from '../constants.js';
import { isEventOver, isEventToday, isFutureEvent } from './date-format.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isEventOver(point.dateTo)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isEventToday(point.dateFrom)),
};

export { filter };
