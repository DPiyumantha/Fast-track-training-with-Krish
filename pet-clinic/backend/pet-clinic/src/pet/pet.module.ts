import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetController } from './controllers/pet.controller';
import { PetRepository } from './Pet.repository';
import { PetService } from './pet.service';
import { Pet, PetSchema } from './schemas/Pet.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
  controllers: [PetController],
  providers: [PetService, PetRepository],
})
export class PetModule {}
