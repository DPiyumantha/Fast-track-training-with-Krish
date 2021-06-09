import { Module } from '@nestjs/common';
import { RepetitionsController } from './repetitions.controller';
import { RepetitionsService } from './repetitions.service';

@Module({
  controllers: [RepetitionsController],
  providers: [RepetitionsService]
})
export class RepetitionsModule {}
