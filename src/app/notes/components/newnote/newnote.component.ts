import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Note } from './../../models/note.model';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.scss']
})
export class NewnoteComponent implements OnInit {

  note: Note;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data=>{
      let id: number = Number(data['id']);
      if(id === 0){
        this.note = new Note();     
      }
    });
  }

  ngOnInit() {

  }

}
