import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nth-fibonacci-label',
  templateUrl: './nth-fibonacci-label.component.html',
  styleUrls: ['./nth-fibonacci-label.component.scss']
})
export class NthFibonacciLabelComponent implements OnInit {
  @Input()result: string = '';
  constructor() { }
  
  ngOnInit(): void {
  }



}
