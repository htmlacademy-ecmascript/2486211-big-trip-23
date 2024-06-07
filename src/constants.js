import dayjs from 'dayjs';

const GROUP_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

const FilterType = {
  EVERYTHING: 'Everything',
  PAST: 'Past',
  PRESENT: 'Present',
  FUTURE: 'Future',
};

const StubText = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.LOADING]: 'Loading...',
  [FilterType.LOADING_ERROR]: 'Failed to load latest route information'
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const DEFAULT_POINT = {
  id: 0,
  basePrice: '0',
  dateFrom: dayjs(new Date()).toISOString(),
  dateTo: dayjs(new Date()).toISOString(),
  destination: '0',
  isFavorite: false,
  offers: [],
  type: GROUP_TYPES[5]
};

export { GROUP_TYPES, StubText, FilterType, Mode, SortType, UserAction, UpdateType, DEFAULT_POINT};
