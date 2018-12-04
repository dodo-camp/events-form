import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Events } from '../model/events.interface';

@Injectable()
export class EventsServiceService {
  private $eventsSubject: BehaviorSubject<Events> = new BehaviorSubject(null);
  private $eventObservable: Observable<Events> = this.$eventsSubject.asObservable();
  constructor() { }

  public eventsObservable(): Observable<Events> {
    return this.$eventObservable;
  }

  public eventsSubject(events: Events) {
    this.$eventsSubject.next(events);
  }

}
