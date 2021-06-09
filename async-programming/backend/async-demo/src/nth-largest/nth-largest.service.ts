import { Injectable } from '@nestjs/common';

@Injectable()
export class NthLargestService {
  getThirdLargest(arr: [], n: number) {
    if (arr.length < n) throw 'Array too small';
    return arr.filter((i) => !isNaN(i)).sort((a, b) => b - a)[n - 1];
  }
}
