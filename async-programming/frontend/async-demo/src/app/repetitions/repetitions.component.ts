import { BasicResult } from './../basic-result';
import { RepetitionsService } from './../services/repetitions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repetitions',
  templateUrl: './repetitions.component.html',
  styleUrls: ['./repetitions.component.scss']
})
export class RepetitionsComponent implements OnInit {
userInput:string='';
data!:BasicResult;
  constructor(private _repetitionsService:RepetitionsService) { }

  ngOnInit(): void {
  }

  checkRepetitions(){
    this._repetitionsService.checkAnagram(this.userInput)
    .then(res=>this.data=<BasicResult>res)
    .catch(console.log)
  }

}
