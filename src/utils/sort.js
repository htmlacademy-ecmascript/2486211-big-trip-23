import dayjs from 'dayjs';

const getTimeDifference = ({dateFrom, dateTo}) => dayjs(dateTo).diff(dayjs(dateFrom));

const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

const sortByTime = (pointA, pointB) => getTimeDifference(pointB) - getTimeDifference(pointA);

const sortByDay = (pointA, pointB) => dayjs(pointB.dateFrom) - dayjs(pointA.dateFrom);

export { sortByPrice, sortByTime, sortByDay };
