import { PetService } from '../pet.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Pet } from '../schemas/Pet.schema';
import { PetDataValidatorPipe } from 'src/pipes/pet-data-validator.pipe';
import { PetCreateDTO } from '../DTOs/Pet.create.dto';
import { PetUpdateDTO } from '../DTOs/Pet.update.dto';

@Controller('pets')
export class PetController {
  constructor(private petService: PetService) {}

  @Get()
  getAllPets() {
    return this.petService.getAllPets();
  }

  // @Get(':id')
  // getPetById(@Param('id') id: string): Pet {
  //   return this.petService.getPetById(id);
  // }

  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(new PetDataValidatorPipe())
  async createPet(@Body() petCreateDTO: PetCreateDTO): Promise<Pet> {
    return await this.petService.createPet(petCreateDTO);
  }

  // @Patch(':id')
  // updatePet(@Body() petUpdateDTO: PetUpdateDTO, @Param('id') id: string): Pet {
  //   petUpdateDTO.id = id;
  //   return this.petService.updatePet(petUpdateDTO);
  // }

  // @Delete(':id')
  // deletePet(@Param('id') id: string) {
  //   this.petService.deletePetById(id);
  // }
}
