import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventsServiceService } from '../services/events-service.service';
import { Data, Events } from '../model/events.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  public events: Data[];
  private $eventSubscription: Subscription;

  constructor(private eventService: EventsServiceService) { }

  ngOnInit() {
    this.$eventSubscription = this.eventService.eventsObservable().subscribe((res) => {
      if (res)
        this.events = res.data;
      else
        this._lookForLocalStorage();
    });
  }

  protected _lookForLocalStorage() {
    if (localStorage.getItem('events')) {
      let events: Events = JSON.parse(localStorage.getItem('events'));
      this.eventService.eventsSubject(events);
    }
  }

  ngOnDestroy() {
    this.$eventSubscription.unsubscribe();
  }

}
