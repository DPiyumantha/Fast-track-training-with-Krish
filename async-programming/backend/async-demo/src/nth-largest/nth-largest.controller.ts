import { ResponseObj } from './../model/Response.model';
import { NthLargestService } from './nth-largest.service';
import { Body, Controller, Get } from '@nestjs/common';

@Controller('nth-largest')
export class NthLargestController {
  constructor(private _nthLargestService: NthLargestService) {}
  @Get()
  getNthLargest(@Body() body) {
    try {
      const result = this._nthLargestService.getThirdLargest(
        body.inputs.arr,
        body.inputs.n,
      );
      return new ResponseObj(result, false, '');
    } catch (error) {
      return new ResponseObj('', true, error.message);
    }
  }
}
