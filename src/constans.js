const GROUP_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DESTINATION = ['Amsterdam', 'Geneva', 'Chamonix'];
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

export { GROUP_TYPES, DESTINATION, AVAILABLE_OFFERS, ID_IMAGES};
