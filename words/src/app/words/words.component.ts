import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  userInput: string = '';
  words: string[] = []
  message: string = '';
  vowels = ["a", "e", "i", "o", "u"];
  constructor() { }

  ngOnInit(): void {
  }


  sortWordsWithVowels(): void {
    this.words = [];
    if (this.userInput.length < 1) { this.message = "Please type some text"; } else {
      this.message = '';
      this.words = Array.from(new Set(this.userInput
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\s\d]/g, '')
        .split(" ")
        .filter(word => this.isIncludingVowel(word))
        .sort())
      )
    }
  }

  isIncludingVowel(word: string): boolean {
    return this.vowels.some(val => word.split('').includes(val))
  }

}
