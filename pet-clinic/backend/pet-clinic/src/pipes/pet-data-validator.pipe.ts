import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { PetType } from 'src/pet/Pet.enum';

@Injectable()
export class PetDataValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!(value.type in PetType)) {
      throw new BadRequestException(value.type + ' not a valid type');
    }
    return value;
  }
}
