import { EventSelectComponent } from './event-select/event-select.component';
import { EventListComponent } from './event-list/event-list.component';
import { TitleComponent } from './components/title/title.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { LocationComponent } from './components/event-details/location/location.component';
import { EmailComponent } from './components/event-details/email/email.component';
import { DescriptionComponent } from './components/event-details/description/description.component';
import { GuestComponent } from './components/guest/guest.component';
import { EventEditComponent } from './event-list/components/event-edit/event-edit.component';

export const componentsMap = {
    eventsList: EventListComponent,
    eventsSelect: EventSelectComponent
}

export const components: any[] = [
    EventListComponent,
    EventSelectComponent,
    TitleComponent,
    DatepickerComponent,
    LocationComponent,
    EmailComponent,
    DescriptionComponent,
    GuestComponent,
    EventEditComponent
]