import { BasicResult } from './../basic-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-label',
  templateUrl: './display-label.component.html',
  styleUrls: ['./display-label.component.scss']
})
export class DisplayLabelComponent implements OnInit {
@Input() result:BasicResult={data:'',error:false,errorMessage:''};
  constructor() { }

  ngOnInit(): void {
  }

}
