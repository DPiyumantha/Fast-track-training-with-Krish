import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {
  isAnagramRec(word1: string, word2: string) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    if (
      word1.split('').length == 1 &&
      word2.split('').length == 1 &&
      word1 === word2
    ) {
      return true;
    }

    const arr = word2.split('');
    const arr2 = word1.split('');
    const pos = arr.findIndex((el) => el === arr2[0]);
    if (pos >= 0) {
      return this.isAnagramRec(
        word1.substring(1),
        word2.replace(word2[pos], ''),
      );
    } else {
      return false;
    }
  }
}
