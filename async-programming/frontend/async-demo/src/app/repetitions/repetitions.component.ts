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
    //Using promise
    this._repetitionsService.checkAnagram(this.userInput)
    .then((res)=>this.data=<BasicResult>res)
    .then(()=>this.data={result:JSON.parse(this.data.result),errorMessage:this.data.errorMessage,error:this.data.error})
    .then(()=>this.data.result=this.data.result.sort((a:any[],b:any[])=>a[0]-b[0]))
    .catch(console.log)
  }

}
