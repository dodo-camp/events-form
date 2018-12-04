import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventsService } from '../services/events-service.service';
import { UtilityService } from '../services/utility.service';
import { Events } from '../model/events.interface';

@Component({
  selector: 'app-event-select',
  templateUrl: './event-select.component.html',
  styleUrls: ['./event-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventSelectComponent implements OnInit {
  public group: FormGroup;

  constructor(private eventService: EventsService, private utilityService: UtilityService, private cd: ChangeDetectorRef) {
    this._createFormGroups();
  }

  protected _createFormGroups() {
    this.group = this.utilityService.createFormGroup();
    this.cd.markForCheck();
  }

  ngOnInit() {
  }

  public saveEvent(group: FormGroup) {
    if (!localStorage.getItem('events'))
      this._setFirstEvent(group);
    else
      this._setNewEvent(group);
  }

  protected _setFirstEvent(group: FormGroup) {
    let events: Events = {
      data: []
    };
    this._storeToLocalStorage(group, events);
  }

  protected _setNewEvent(group: FormGroup) {
    let events: Events = JSON.parse(localStorage.getItem('events'));
    this._storeToLocalStorage(group, events);
  }

  protected _storeToLocalStorage(group: FormGroup, events: Events) {
    events.data.push(group.value);
    let event = JSON.stringify(events);
    localStorage.setItem('events', event);
    this.eventService.eventsSubject(JSON.parse(localStorage.getItem('events')));
    group.reset();
  }

}
