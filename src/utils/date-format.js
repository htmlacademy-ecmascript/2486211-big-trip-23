import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

/** @enum {number} Перечисление разных единиц времени в милисекундах */
const TimeInMilliseconds = {
  HOUR: 3600000,
  DAY: 86400000,
};

/** @enum {string} Перечисление форматов отображения дат из библиотеки dayjs */
const DateFormat = {
  DATE_FROM_FORMAT: 'MMM D', // Сокращенное название месяца, день месяца(двухзначное число)
  TIME_FORMAT: 'HH:mm', // Час(двухзначное число), минута(двухзначное число)
  FULL_DATE_FORMAT: 'DD/MM/YY HH:mm', // 01.01.24 01:01
  // Формат продолжительности нахождения в точке маршрута зависит от длительности
  MINUTES_FORMAT: 'mm[M]', // Менее часа: минуты (например, 23M);
  DAY_FORMAT: 'HH[H] mm[M]', // Менее суток: часы минуты (например, 02H 44M или 12H 00M, если минуты равны нулю);
  DAYS_FORMAT: 'DD[D] HH[H] mm[M]', // Более суток: дни часы минуты (например, 51D 02H 30M или 07D 00H 00M, если часы и/или минуты равны нулю).
};

/**
 *Функция с использованием библиотеки dayjs для получения отформатированной даты
 * @param {string} дата, которую необходимо отформатировать
 * @param {string} нужный формат отображения даты
 */
const humanizePointDueDate = (dueDate, dateFormat) => dueDate ? dayjs(dueDate).format(dateFormat) : '';

const isEventOver = (dueDate) => dueDate && dayjs(dueDate).isBefore(dayjs(new Date(), 'D'));

const isFutureEvent = (dueDate) => dueDate && dayjs(dueDate).isAfter(dayjs(new Date(), 'D'));

const isEventToday = (dueDate) => dueDate && dayjs(dueDate).isSame(dayjs(), 'D');

const isDatesSame = (dateA, dateB) => (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');

dayjs.extend(duration);

/**
 *Функция с использованием библиотеки dayjs для получения продолжительности нахождения в точке маршрута
 * @param {ISOString} dateFrom дата и время начала события в точке маршрута
 * @param {ISOString} dateTo дата и время окончания события в точке маршрута
 * @returns {string} продолжительность в формате, зависящем от длительности нахождения в точке маршрута
 */

const getDuration = (dateFrom, dateTo) => {

  /** Перевод дат начала и окончания события в объекты dayjs для дальнейшей работы с ними */
  const endDate = dayjs(dateTo);
  const startDate = dayjs(dateFrom);

  /** @const {object} объект продолжительности с длительностью времени, находящейся в промежутке между startDate и endDate */
  const durationInUnits = dayjs.duration(endDate.diff(startDate));

  /** @const {number} значение свойства с длительностью времени в милисекундах */
  const durationInMilliseconds = durationInUnits.$ms;

  /** Деструктуризация объекта */
  const { $d } = durationInUnits;

  /** @const {number} значение свойства с длительностью времени в месяцах */
  const countMonths = $d.months;

  /** если true, тогда сделаем "конвертацию" - переведем месяца в дни */
  if (countMonths > 0) {

    /**
     * @const {object} объект, в метод .duration передаем количество месяцев,
     * которые в данном объекте будут представлены в милисекундах
     */
    const monthsInMil = dayjs.duration(countMonths, 'month');

    /**
     * перезаписывает значение свойства объекта продолжительности,
     * получает продолжительность времени, измеряемую в днях, здесь .duration может принимать аргументом только милисекунды
     */
    $d.days += dayjs.duration(monthsInMil.$ms).asDays();
  }
  /** Если true, конструкция вернет {string} - Формат продолжительности нахождения в точке маршрута в зависимости от длительности */
  switch (true) {
    case durationInMilliseconds < TimeInMilliseconds.HOUR:
      return durationInUnits.format(DateFormat.MINUTES_FORMAT);
    case durationInMilliseconds > TimeInMilliseconds.HOUR && durationInMilliseconds < TimeInMilliseconds.DAY:
      return durationInUnits.format(DateFormat.DAY_FORMAT);
    case durationInMilliseconds > TimeInMilliseconds.DAY:
      return durationInUnits.format(DateFormat.DAYS_FORMAT);
  }
};

export { humanizePointDueDate, getDuration, DateFormat, isEventOver, isFutureEvent, isEventToday, isDatesSame};
