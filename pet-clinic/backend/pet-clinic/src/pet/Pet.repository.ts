import { PetUpdateDTO } from './DTOs/Pet.update.dto';
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

  async findAll(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async findOne(id: string): Promise<Pet> {
    return this.petModel.findById(id).exec();
  }

  async update(updatePetDto: PetUpdateDTO): Promise<Pet> {
    return await this.petModel.findByIdAndUpdate(
      { _id: updatePetDto.id },
      updatePetDto,
    );
  }

  async deleteOne(id: string): Promise<boolean> {
    const res = await this.petModel.deleteOne({ _id: id }).exec();
    if (res.deletedCount > 0) return true;
    return false;
  }
}
