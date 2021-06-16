import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PetType } from '../Pet.enum';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  type: PetType;
  @Prop({ required: true })
  breed: string;
  @Prop()
  weight: number;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
