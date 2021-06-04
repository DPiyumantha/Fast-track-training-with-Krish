import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  userInput: string = '';
  words: string[] = [];
  message: string = '';
  vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  constructor() { }

  ngOnInit(): void {
  }


  sortWordsWithVowels(): void {
    if (this.userInput.length < 1) { this.message = "Please type some text"; } else {
      this.message = '';
      this.words = this.userInput
      .trim()
      .replace(/[^a-zA-Z\s\d]/g, '')
      .split(" ")
      .filter(word => this.isIncludingVowel(word))
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    }
  }

  isIncludingVowel(word: string): boolean {
    return this.vowels.some(val => word.split('').includes(val))
  }

}
