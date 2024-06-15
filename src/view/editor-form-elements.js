const createOfferItemTemplate = (type, title, price, id, className) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${id}" type="checkbox" name="event-offer-${type}" data-offer-id="${id}" ${className}>
    <label class="event__offer-label" for="event-offer-${type}-${id}">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

const createTypeGroupTemplate = (group, className) => `
  <div class="event__type-item">
    <input id="event-type-${group.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${group.toLowerCase()}" ${className}>
    <label class="event__type-label  event__type-label--${group.toLowerCase()}" for="event-type-${group.toLowerCase()}-1">${group}</label>
  </div>
`;

const createImageItemTemplate = (src, description) => `
  <img class="event__photo" src="${src}" alt="${description}">
`;
const createImageSection = (pictures) => `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${pictures.map(({src, description}) => createImageItemTemplate(src, description)).join('')}
    </div>
  </div>
  `;

const setButtonName = (id, isDeleting) => {
  if (!id) {
    return 'Cancel';
  }
  return isDeleting ? 'Deleting...' : 'Delete';
};

export { createOfferItemTemplate, createTypeGroupTemplate, createImageSection, setButtonName };
