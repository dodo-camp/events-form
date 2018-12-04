import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './events/events.module#EventsModule'
    }
]