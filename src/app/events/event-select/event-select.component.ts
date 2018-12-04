import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EventsServiceService } from '../services/events-service.service';
import { Events } from '../model/events.interface';

@Component({
  selector: 'app-event-select',
  templateUrl: './event-select.component.html',
  styleUrls: ['./event-select.component.css']
})
export class EventSelectComponent implements OnInit {
  public group: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventsServiceService) {
    this.group = fb.group({
      title: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      description: new FormControl(),
      location: new FormControl('', [Validators.required]),
      guests: new FormControl()
    })
  }

  ngOnInit() {
  }

  public saveEvent(group: FormGroup) {
    if (!localStorage.getItem('events')) {
      this._setFirstEvent(group);
    }
    else {
      this._setNewEvent(group);
    }
    group.reset();
  }

  protected _setFirstEvent(group: FormGroup) {
    let events: Events = {
      data: []
    };
    events.data.push(group.value);
    let event = JSON.stringify(events);
    localStorage.setItem('events', event);
    this.eventService.eventsSubject(JSON.parse(localStorage.getItem('events')));
  }

  protected _setNewEvent(group: FormGroup) {
    let events: Events = JSON.parse(localStorage.getItem('events'));
    events.data.push(group.value);
    let event = JSON.stringify(events);
    localStorage.setItem('events', event);
    this.eventService.eventsSubject(JSON.parse(localStorage.getItem('events')));
  }

}
