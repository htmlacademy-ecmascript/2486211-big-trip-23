const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const makeCapitalized = (type) => type[0].toUpperCase() + type.slice(1, type.length);

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export { getRandomArrayElement, makeCapitalized, updateItem };
