import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { services } from './services/index';
import { components } from './components';
import { material_modules } from './material-modules/material-modules';
import { providers } from './material-modules/material-modules';
import { routes } from './events.routing';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [...components],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.apikey,
      libraries: ["places"]
    }),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ...material_modules,
  ],
  providers: [
    ...services,
    ...providers
  ]
})
export class EventsModule { }
