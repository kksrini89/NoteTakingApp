import {Routes,RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent, AboutComponent} from './shared/index';

const APP_Routes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'notes', loadChildren:'./notes/note.module#NoteModule'},
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' , pathMatch:'full' }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);