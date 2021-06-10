import { ResponseObj } from './../model/Response.model';
import { AnagramService } from './anagram.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('anagram')
export class AnagramController {
  constructor(private anagramService: AnagramService) {}
  @Post()
  getIsAnagram(@Body() body) {
    if (body.inputs[0] === '' && body.inputs[1] === '')
      return new ResponseObj('', true, 'Invalid inputs');
    const status = this.anagramService.isAnagramRec(
      body.inputs[0],
      body.inputs[1],
    );
    if (status) return new ResponseObj('Anagrams', false, '');
    return new ResponseObj('Not Anagrams', false, '');
  }
}
