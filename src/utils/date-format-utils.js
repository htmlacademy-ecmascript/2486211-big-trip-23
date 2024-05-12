import dayjs from 'dayjs';

const TimeInMilliseconds = {
  HOUR: 3600000,
  DAY: 86400000,
};

const DateFormat = {
  DATE_FROM_FORMAT: 'MMM D', // Сокращенное название месяца, день месяца(двухзначное число)
  TIME_FORMAT: 'HH:mm', // Час(двухзначное число), минута(двухзначное число)
  FULL_DATE_FORMAT: 'DD/MM/YY HH:mm', // 01.01.24 01:01
  // Формат дат для отображения результата разницы
  MINUTES_FORMAT: 'mm[M]', // если разница менее часа (30M)
  DAY_FORMAT: 'HH[H] mm[M]', // если разница менее суток(01H 02M);
  DAYS_FORMAT: 'DD[D] HH[H] mm[M]', // Более суток(01D 03H 30M).
};

const humanizePointDueDate = (dueDate, dateFormat) => dueDate ? dayjs(dueDate).format(dateFormat) : '';

const getDuration = (dateFrom, dateTo) => {
  const timeDifference = dayjs(dateTo).diff(dateFrom);

  switch (true) {
    case timeDifference < TimeInMilliseconds.HOUR:
      return dayjs(timeDifference).format(DateFormat.MINUTES_FORMAT);
    case timeDifference > TimeInMilliseconds.HOUR && timeDifference < TimeInMilliseconds.DAY:
      return dayjs(timeDifference).format(DateFormat.DAY_FORMAT);
    case timeDifference > TimeInMilliseconds.DAY:
      return dayjs(timeDifference).format(DateFormat.DAYS_FORMAT);
  }
};
export { humanizePointDueDate, getDuration, DateFormat};
