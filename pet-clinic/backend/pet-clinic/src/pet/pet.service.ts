import { PetRepository } from './Pet.repository';
import { PetCreateDTO } from './DTOs/Pet.create.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PetUpdateDTO } from './DTOs/Pet.update.dto';
import { Pet } from './schemas/Pet.schema';

@Injectable()
export class PetService {
  constructor(private petRepo: PetRepository) {}
  private pets: Pet[] = [];
  getAllPets(): Pet[] {
    return this.pets;
  }

//   getPetById(id: string): Pet {
//     const pet = this.pets.find((pet) => pet.id === id);
//     if (!pet) throw new NotFoundException(`Pet for id ${id} does not exists`);
//     return pet;
//   }

  async createPet(petCreateDTO: PetCreateDTO): Promise<Pet> {
    return await this.petRepo.create(petCreateDTO);
  }

//   updatePet(petUpdateDTO: PetUpdateDTO): Pet {
//     const { id, name, type, breed, weight } = petUpdateDTO;
//     const oldRecord = this.getPetById(id);
//     oldRecord.name = name;
//     oldRecord.type = type;
//     oldRecord.breed = breed;
//     oldRecord.weight = weight;
//     return oldRecord;
//   }

//   deletePetById(id) {
//     this.pets = this.pets.filter((pet) => pet.id != id);
//   }
}
