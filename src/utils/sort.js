import dayjs from 'dayjs';

const sortByPrice = (pointA, pointB) => pointA.basePrice - pointB.basePrice;

const sortByTime = (pointA, pointB) => dayjs(pointA.dueDate).diff(dayjs(pointB.dueDate));

export { sortByPrice, sortByTime };
