import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
userInput:string='';
  constructor(private _communicationService: CommunicationService) { }

  ngOnInit(): void {

  }

  onChangeText(event:any){
    this.userInput=event.target.value;
    this._communicationService.changeInput(this.userInput)
  }

}
