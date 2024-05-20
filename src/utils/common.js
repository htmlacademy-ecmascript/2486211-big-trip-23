const getRandomElements = (items) => {
  const startFrom = Math.floor(Math.random() * items.length - 5);
  const endTo = items.length;

  return items.slice(startFrom, endTo);
};

const makeCapitalized = (type) => type[0].toUpperCase() + type.slice(1, type.length);

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export { makeCapitalized, updateItem, getRandomElements };
