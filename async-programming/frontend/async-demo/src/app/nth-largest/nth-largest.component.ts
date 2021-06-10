import { NthLargestService } from './../services/nth-largest.service';
import { Component, OnInit } from '@angular/core';
import { BasicResult } from '../basic-result';

@Component({
  selector: 'app-nth-largest',
  templateUrl: './nth-largest.component.html',
  styleUrls: ['./nth-largest.component.scss']
})
export class NthLargestComponent implements OnInit {
  userInput:string='';
  n:string='';
data!:BasicResult;
  constructor(private _nthLargestService:NthLargestService) { }

  ngOnInit(): void {
  }

  nthLargest(){
    const arr = this.userInput.split(',').map(i=>i.trim());
    this._nthLargestService.getnthLargest(arr,this.n).subscribe(
      res=>this.data=<BasicResult>res
    )
  }
  onClick(){
    console.log(this.data)
  }

}
