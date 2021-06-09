import { Module } from '@nestjs/common';
import { AnagramModule } from './anagram/anagram.module';
import { NthLargestModule } from './nth-largest/nth-largest.module';
import { RepetitionsModule } from './repetitions/repetitions.module';

@Module({
  imports: [AnagramModule, NthLargestModule, RepetitionsModule],
})
export class AppModule {}
