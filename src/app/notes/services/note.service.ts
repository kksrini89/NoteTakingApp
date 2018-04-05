import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {Note} from '../index';

@Injectable()
export class NoteService{
    private _notes: Note[];
    constructor(){
        this._notes = [ { title: '', content : '', noteColor : ''},
                        { title: '', content : '', noteColor : ''},
                        { title: '', content : '', noteColor : ''}
                      ];
    }

    getNotes(): Observable<Note[]>{
        return Observable.of(this._notes);
    }
}