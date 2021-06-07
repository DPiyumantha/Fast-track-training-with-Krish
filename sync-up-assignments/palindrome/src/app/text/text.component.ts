import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
@Output() changeTextEvent: EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeUserInput(event:any){
    this.changeTextEvent.emit(event.target.value)
  }

}
