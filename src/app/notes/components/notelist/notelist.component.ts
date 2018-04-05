import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Note } from './../../models/note.model';
import { NoteService } from './../../services/note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit, OnDestroy {

  notes: Note[];
  private notesSubscription: Subscription;
 
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notesSubscription = this.noteService.getNotes().subscribe(data=> {
      this.notes = data;
    });
  }

  ngOnDestroy(): void{
    if(this.notesSubscription){
      this.notesSubscription.unsubscribe();
    }
  }

}
