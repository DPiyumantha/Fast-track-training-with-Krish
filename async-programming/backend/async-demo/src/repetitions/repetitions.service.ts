import { Injectable } from '@nestjs/common';

@Injectable()
export class RepetitionsService {
  map: any = {};
  regex = /[^a-zA-Z\s\d]/g;

  checkLetterRepetitions(sentence: string) {
    sentence = sentence.replace(this.regex, '');
    const arr = sentence
      .split('')
      .filter((i) => i != ' ')
      .map((i) => i.toLowerCase());
    arr.sort();
    this.map = new Map();
    arr.forEach((element) => {
      this.map.has(element)
        ? this.map.set(element, this.map.get(element) + 1)
        : this.map.set(element, 1);
    });

    return this.map;
  }
}
