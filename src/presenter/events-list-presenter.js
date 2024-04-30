import EventsListView from '../view/events-list.js';
import EventsItemView from '../view/events-point.js';
import EditorPointView from '../view/editor-point.js';
import NewPointView from '../view/new-point.js';
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
