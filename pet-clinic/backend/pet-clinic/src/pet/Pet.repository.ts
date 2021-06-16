import { PetCreateDTO } from './DTOs/Pet.create.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from './schemas/Pet.schema';

@Injectable()
export class PetRepository {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}
  async create(petCreateDTO: PetCreateDTO): Promise<Pet> {
    const pet = new this.petModel(petCreateDTO);
    return await pet.save();
  }
}
