import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventsService } from '../services/events-service.service';
import { Data, Events } from '../model/events.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit, OnDestroy {
  public events: Events;
  private $eventSubscription: Subscription;
  public dataForEdit: Data;
  public edit: boolean = false;
  private curretnIndexForEdit: number;

  constructor(private eventService: EventsService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.$eventSubscription = this.eventService.eventsObservable().subscribe((res) => {
      if (res)
        this.events = res;
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

  public deleteEvent(index: number) {
    this.events.data.splice(index, 1);
    this._refreshEvents();
  }

  protected _refreshEvents() {
    let events = JSON.stringify(this.events);
    localStorage.setItem('events', events);
    this.eventService.eventsSubject(this.events);
  }

  public editEvent(index: number) {
    this.curretnIndexForEdit = index;
    this.dataForEdit = this.events.data[index];
    this.edit = !this.edit;
    this.cd.markForCheck();
  }

  public closeEdit(event: boolean) {
    this.edit = event;
  }

  public saveNewEvent(event: Data) {
    this.events.data[this.curretnIndexForEdit] = event;
    this._refreshEvents();
  }

  trackByFn(index, item) {
    return index;
  }

}
