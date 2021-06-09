import { AnagramService } from './anagram.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('anagram')
export class AnagramController {
  constructor(private anagramService: AnagramService) {}
  @Post()
  getIsAnagram(@Body() body) {
    console.log(body);
    const status = this.anagramService.isAnagramRec(
      body.inputs[0],
      body.inputs[1],
    );
    return { result: status };
  }
}
