import { Routes } from '@angular/router';
import { componentsMap } from './components';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'event-select',
        pathMatch: 'full'
    },
    {
        path: 'event-select',
        component: componentsMap.eventsSelect
    },
    {
        path: 'events-list',
        component: componentsMap.eventsList
    },
    {
        path: '**',
        redirectTo: 'event-select'
    }
]