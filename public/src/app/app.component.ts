import { NoteService } from './note.service';
import { Component } from '@angular/core';
import { Note } from './note';
import { OnInit } from '@angular/core';

import 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Anonymous Notes';
  notes: Note[];
  note: Note = new Note();

  constructor(private _noteService: NoteService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    // map Observable result to Note array
    // this._noteService.getNotes().map(allNotes => <Note[]>allNotes).subscribe((allNotes) => {
    //   this.notes = allNotes;
    // });
    console.log('this in getNotes function', this);
    this._noteService.getNotes().subscribe((allNotes) => {
      console.log('this in arrow function', this);
      this.notes = allNotes as Note[];
    });
  }

  addNote() {
    const newNote = this._noteService.addNote(this.note);
    // must subscribe to the observable
    newNote.subscribe(note => console.log(note));
    this.note = new Note();
    this.getNotes();
  }

}
