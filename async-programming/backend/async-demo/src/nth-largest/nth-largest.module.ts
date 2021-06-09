import { Module } from '@nestjs/common';
import { NthLargestController } from './nth-largest.controller';
import { NthLargestService } from './nth-largest.service';

@Module({
  controllers: [NthLargestController],
  providers: [NthLargestService]
})
export class NthLargestModule {}
