import { filter } from '../utils/filter.js';

const generateFilter = (points) => Object.entries(filter).map(
  ([filterType, filterPoints]) => ({
    type: filterType,
    count: filterPoints(points).length,
  })
);

export { generateFilter };
