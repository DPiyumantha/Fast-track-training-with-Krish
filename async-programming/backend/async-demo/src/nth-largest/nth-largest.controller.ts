import { ResponseObj } from './../model/Response.model';
import { NthLargestService } from './nth-largest.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('nth-largest')
export class NthLargestController {
  constructor(private _nthLargestService: NthLargestService) {}
  @Post()
  getNthLargest(@Body() body) {
    try {
      const result = this._nthLargestService.getThirdLargest(
        body.inputs[0],
        body.inputs[1],
      );
      return new ResponseObj(result, false, '');
    } catch (error) {
      return new ResponseObj('', true, error);
    }
  }
}
