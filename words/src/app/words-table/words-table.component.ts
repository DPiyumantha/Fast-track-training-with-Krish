import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.component.html',
  styleUrls: ['./words-table.component.scss']
})
export class WordsTableComponent implements OnInit {

  @Input() result: {
    words: string[],
    error: boolean,
    errorMessage: string
  } = { words: [], error: false, errorMessage: '' };

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(event: any) {
    this.result = event
  }

}
