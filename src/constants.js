const GROUP_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DESTINATIONS = ['Amsterdam', 'Geneva', 'Chamonix'];
const FILTER_TYPES = ['Everything', 'Future', 'Present', 'Past'];
const SORT_TYPES = ['Day', 'Event', 'Time', 'Price', 'Offers'];

const ID_IMAGES = [1, 2, 3, 4, 5];

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

export { GROUP_TYPES, DESTINATIONS, FILTER_TYPES, SORT_TYPES, ID_IMAGES, StubText, FilterType};
