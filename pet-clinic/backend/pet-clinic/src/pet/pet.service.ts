import { PetRepository } from './Pet.repository';
import { PetCreateDTO } from './DTOs/Pet.create.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PetUpdateDTO } from './DTOs/Pet.update.dto';
import { Pet } from './schemas/Pet.schema';

@Injectable()
export class PetService {
  constructor(private petRepo: PetRepository) {}

  async getAllPets(): Promise<Pet[]> {
    return await this.petRepo.findAll();
  }

  async getPetById(id: string): Promise<Pet> {
    return await this.petRepo.findOne(id);
  }

  async createPet(petCreateDTO: PetCreateDTO): Promise<Pet> {
    return await this.petRepo.create(petCreateDTO);
  }

  async updatePet(petUpdateDTO: PetUpdateDTO): Promise<Pet> {
    return await this.petRepo.update(petUpdateDTO);
  }

  async deletePetById(id): Promise<boolean> {
    return await this.petRepo.deleteOne(id);
  }
}
