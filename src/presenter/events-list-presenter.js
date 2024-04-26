import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EditorPointView from '../view/editor-point-view.js';
import NewPointView from '../view/new-point-view.js';
import { render } from '../render.js';


export default class EventsListPresenter {
  EventsListComponent = new EventsListView();

  constructor({eventsListContainer}) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(this.EventsListComponent, this.eventsListContainer);
    render(new EditorPointView(), this.EventsListComponent.getElement());
    render(new NewPointView(), this.EventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventsItemView(), this.EventsListComponent.getElement());
    }
  }
}
