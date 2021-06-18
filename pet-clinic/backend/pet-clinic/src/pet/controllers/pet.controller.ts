import { PetService } from '../pet.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
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
import { PetType } from '../Pet.enum';
//
@Controller('pets')
export class PetController {
  constructor(private petService: PetService) {}

  @Get()
  async getAllPets(): Promise<Pet[]> {
    return await this.petService.getAllPets();
  }

  @Get('types')
  getPetEnum(): any[] {
    return Object.values(PetType);
  }

  @Get(':id')
  async getPetById(@Param('id') id: string): Promise<Pet> {
    return await this.petService.getPetById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(new PetDataValidatorPipe())
  async createPet(@Body() petCreateDTO: PetCreateDTO): Promise<Pet> {
    return await this.petService.createPet(petCreateDTO);
  }

  @Patch(':id')
  async updatePet(
    @Body() petUpdateDTO: PetUpdateDTO,
    @Param('id') id: string,
  ): Promise<Pet> {
    petUpdateDTO.id = id;
    return await this.petService.updatePet(petUpdateDTO);
  }

  @Delete(':id')
  @HttpCode(204)
  async deletePet(@Param('id') id: string) {
    const res = await this.petService.deletePetById(id);
    if (!res) throw new NotFoundException('Record not found');
  }
}
