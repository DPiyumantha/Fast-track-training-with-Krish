import { ResponseObj } from './../model/Response.model';
import { RepetitionsService } from './repetitions.service';
import { Body, Controller, Get } from '@nestjs/common';

@Controller('repetitions')
export class RepetitionsController {
  constructor(private _repetitionsService: RepetitionsService) {}
  @Get()
  getRepetitions(@Body() body) {
    const result = this._repetitionsService.checkLetterRepetitions(body.inputs);
    return new ResponseObj(JSON.stringify([...result]), false, '');
  }
}
