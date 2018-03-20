import { Note } from './note';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {
  notes: Note[];
  constructor(private _http: HttpClient) {
    this.getNotes();
  }

  getNotes() {
    return this._http.get('/notes');
  }

  addNote(note: Note) {
    console.log('in note services add method ', note);
    // must return an observable
    return this._http.post<Note>('/notes', note);
  }

}
