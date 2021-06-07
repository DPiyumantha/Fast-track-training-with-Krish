import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nth-fibonacci',
  templateUrl: './nth-fibonacci.component.html',
  styleUrls: ['./nth-fibonacci.component.scss']
})
export class NthFibonacciComponent implements OnInit {
  userInput: string = '';
  nthFibNumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  map: any = new Map()
  getNthFibonacci(number: any): any {
    if (number < 0 || number == null || number === '') return -1;
    else if (number == 0) return 0;
    else if (number == 1) return 1;
    else if (this.map.has(number)) { return this.map.get(number) }
    else {
      let res = this.getNthFibonacci(number - 1) + this.getNthFibonacci(number - 2);
      this.map.set(number, res)
      return res;
    }
  }

  printNthFibonacci() {
    let result = this.getNthFibonacci(this.userInput)
    result == -1 ? this.nthFibNumber = "Insert a number, zero or positive" : this.nthFibNumber = result;
  }
}
