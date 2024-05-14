import { FilterType } from '../constants.js';
import { isEventOver, isFutureEvent } from './date-format-utils.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isEventOver(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isEventOver(point.dateFrom)),
};

export { filter };
