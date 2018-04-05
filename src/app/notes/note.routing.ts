import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NotelistComponent, NewnoteComponent } from './index';

const Notes_Routes: Routes =[
    { 
        path: '', 
        children: [
            { path: '', component: NotelistComponent },
            { path: 'add/:id', component: NewnoteComponent }
        ]
    }
]

export const NotesRouting: ModuleWithProviders = RouterModule.forChild(Notes_Routes);