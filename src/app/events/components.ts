import { EventSelectComponent } from './event-select/event-select.component';
import { EventListComponent } from './event-list/event-list.component';
import { TitleComponent } from './event-select/components/title/title.component';
import { DatepickerComponent } from './event-select/components/datepicker/datepicker.component';
import { LocationComponent } from './event-select/components/event-details/location/location.component';
import { EmailComponent } from './event-select/components/event-details/email/email.component';
import { DescriptionComponent } from './event-select/components/event-details/description/description.component';
import { GuestComponent} from './event-select/components/guest/guest.component';
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