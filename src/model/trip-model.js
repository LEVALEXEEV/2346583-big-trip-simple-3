import { generateTripEvents } from './trip-event';

export default class TripModel {
  #tripEvents = generateTripEvents(4);

  get tripEvents() {
    return this.#tripEvents;
  }
}
