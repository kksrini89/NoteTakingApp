import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { NotesRouting } from './note.routing';
import { NewnoteComponent, NotelistComponent, NoteService } from './index';

@NgModule({
    declarations:[ NotelistComponent, NewnoteComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        NotesRouting
    ],
    providers: [ NoteService ]
})
export class NoteModule{

}