const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const makeCapitalized = (type) => type[0].toUpperCase() + type.slice(1, type.length);

export { getRandomArrayElement, makeCapitalized };
