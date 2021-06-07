import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
userInput:string='';
  constructor(private _communicationService:CommunicationService) { }

  ngOnInit(): void {
    this._communicationService.textSource$.subscribe(userInput=>this.userInput=userInput)
  }

  onSubmit(){
    this._communicationService.displayResult(this.checkPalindrome())
  }

  checkPalindrome() {

    if (this.userInput.length < 1) { return "Enter a valid text" } else {
      let word=this.userInput.replace(/[^A-Za-z]/g,'');
      let reversedWord = word.split('').reduce((prev, curr) => curr.concat(prev));
      if(word.toLowerCase() === reversedWord.toLowerCase()){
      return "It's a palindrome" }else{
return "It's not a palindrome";
      }
    }

  }

}
