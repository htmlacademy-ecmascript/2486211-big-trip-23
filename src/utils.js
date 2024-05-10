import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const humanizePointDueDate = (dueDate) => dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';

const makeCapitalized = (type) => type[0].toUpperCase() + type.slice(1, type.length);

export { getRandomArrayElement, humanizePointDueDate, makeCapitalized };
