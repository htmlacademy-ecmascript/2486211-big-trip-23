const GROUP_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const SortType = {
  DAY: 'Day',
  EVENT: 'Event',
  TIME: 'Time',
  PRICE: 'Price',
  OFFERS: 'Offers'
};

const FilterType = {
  EVERYTHING: 'Everything',
  PAST: 'Past',
  PRESENT: 'Present',
  FUTURE: 'Future',
};

const StubText = {
  EVERYTHING: 'Click New Event to create your first point',
  PAST: 'There are no past events now',
  PRESENT: 'There are no present events now',
  FUTURE: 'There are no future events now',
  LOADING: 'Loading...',
  LOADING_ERROR: 'Failed to load latest route information'
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export { GROUP_TYPES, StubText, FilterType, Mode, SortType};
