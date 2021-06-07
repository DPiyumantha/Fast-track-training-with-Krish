import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  regex=/[a-z]*[aeiou][a-z]*/gi
  inputText: string = '';
  result: {
    words: string[],
    error: boolean,
    errorMessage: string
  } = { words: [], error: false, errorMessage: '' }
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sortWordsWithVowels(): void {
    this.result.words = [];
    if (this.inputText.length < 1) {
      this.result.errorMessage = "Please type some text";
      this.result.error = true
    }
    else {
      this.result.errorMessage = '';
      this.result.error = false;
      this.result.words = Array.from(new Set(this.inputText
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\s\d]/g, '')
        .split(" ")
        .filter(word => word.match(this.regex))
        .sort())
      )
    }
  }

  isIncludingVowel(word: string): boolean {
    return this.vowels
      .some(val => word.split('').includes(val))
  }

  onClick() {
    this.sortWordsWithVowels();
    this.result.words.length<1?
    this.clickEvent.emit({...this.result, error:true,errorMessage:"No words with vowels"}):
    this.clickEvent.emit(this.result)
    

  }

}
