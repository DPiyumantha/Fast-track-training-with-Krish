import { IsNotEmpty, IsPositive } from 'class-validator';
import { PetType } from '../Pet.enum';

export class PetUpdateDTO {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  type: PetType;
  @IsNotEmpty()
  breed: string;
  @IsPositive()
  weight: number;
}
