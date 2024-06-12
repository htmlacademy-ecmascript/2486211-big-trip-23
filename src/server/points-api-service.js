import ApiService from '../framework/api-service.js';
import AdapterService from './adapter-service.js';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
};

export default class PointsApiService extends ApiService {
  #pointsAdapterService = new AdapterService();

  get points() {
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  get offers() {
    return this._load({url: 'offers'})
      .then(ApiService.parseResponse);
  }

  get destinations() {
    return this._load({url: 'destinations'})
      .then(ApiService.parseResponse);
  }

  async updatePoint(point) {
    const response = await this._load({
      url: `points/${point.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#pointsAdapterService.adaptToServer(point)),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }
}
