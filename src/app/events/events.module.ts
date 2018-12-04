import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { EventsServiceService } from './services/events-service.service';
import { components } from './components';
import { material_modules } from './material-modules/material-modules';
import { providers } from './material-modules/material-modules';
import { routes } from './events.routing';

@NgModule({
  declarations: [...components],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCMdl2byZOgAEJwJXO3LeTHwHT4JQWQ7Zo",
      libraries: ["places"]
    }),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ...material_modules,
  ],
  providers: [
    EventsServiceService,
    ...providers
  ]
})
export class EventsModule { }
