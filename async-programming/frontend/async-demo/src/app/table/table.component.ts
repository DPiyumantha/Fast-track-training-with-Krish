import { BasicResult } from './../basic-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() items!:any;
// itesms!:any[];
  constructor() {}

  ngOnInit(): void {
  }

}
