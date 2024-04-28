const GROUP_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DESTINATIONS = ['Amsterdam', 'Geneva', 'Chamonix'];
const FILTER_TYPES = ['Everything', 'Future', 'Present', 'Past'];
const SORT_TYPES = ['Day', 'Event', 'Time', 'Price', 'Offers'];
const AVAILABLE_OFFERS = [
  {
    type: 'luggage',
    title: 'Add luggage',
    price: 30
  },
  {
    type: 'comfort',
    title: 'Switch to comfort class',
    price: 100
  },
  {
    type: 'meal',
    title: 'Add meal',
    price: 15
  },
  {
    type: 'seats',
    title: 'Choose seats',
    price: 5
  },
  {
    type: 'train',
    title: 'Travel by train',
    price: 40
  }
];
const ID_IMAGES = [1, 2, 3, 4, 5];

export { GROUP_TYPES, DESTINATIONS, FILTER_TYPES, SORT_TYPES, AVAILABLE_OFFERS, ID_IMAGES};
