import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Output() buttonClicked:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.buttonClicked.emit(null)
  }
}
