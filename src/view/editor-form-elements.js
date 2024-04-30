import { ID_IMAGES } from '../constants.js';

const createOfferItemTemplate = (type, title, price) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}">
    <label class="event__offer-label" for="event-offer-${type}-1">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

const createTypeGroupTemplate = (group) => `
  <div class="event__type-item">
    <input id="event-type-${group.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${group.toLowerCase()}">
    <label class="event__type-label  event__type-label--${group.toLowerCase()}" for="event-type-${group.toLowerCase()}-1">${group}</label>
  </div>
`;

const createImageItemTemplate = (id) => `
  <img class="event__photo" src="img/photos/${id}.jpg" alt="Event photo">
`;
const createImageSection = () => `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${ID_IMAGES.map((id) => createImageItemTemplate(id)).join('')}
    </div>
  </div>
  `;

export { createOfferItemTemplate, createTypeGroupTemplate, createImageSection };
