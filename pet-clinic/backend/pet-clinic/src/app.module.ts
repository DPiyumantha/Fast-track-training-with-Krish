import { MONGODB } from './app.properties';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [PetModule, MongooseModule.forRoot(MONGODB)],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
