import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInput: string = '';
  status: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onChangeUserInput(event: string) {
    this.userInput = event;
  }

  onSubmit() {
    this.status = '';
    this.checkPalindrome();

  }

  checkPalindrome() {

    if (this.userInput.length < 1) { this.status = "Enter a valid text" } else {
      let reversedWord = this.userInput.split('').reduce((prev, curr) => curr.concat(prev));
      this.userInput.toLowerCase() === reversedWord.toLowerCase() ? 
      this.status = "It's a palindrome" : 
      this.status = "It's not a palindrome";
    }

  }

}
