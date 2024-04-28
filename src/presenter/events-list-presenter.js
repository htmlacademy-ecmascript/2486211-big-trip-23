import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EditorPointView from '../view/editor-point-view.js';
import NewPointView from '../view/new-point-view.js';
import { render } from '../render.js';


export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor({eventsListContainer}) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(this.eventsListComponent, this.eventsListContainer);
    render(new EditorPointView(), this.eventsListComponent.getElement());
    render(new NewPointView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventsItemView(), this.eventsListComponent.getElement());
    }
  }
}
