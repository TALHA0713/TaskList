import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';



@Schema({ timestamps: true })
export class Task extends Document {
  @Prop({ required: true })
  tittle: string;

  @Prop({ required: true, maxLength: 255 })
  description: string;

  @Prop({ required: true})
  startDate: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'User' }] })
  users: string[]; 

}

export const TaskSchema = SchemaFactory.createForClass(Task);
