import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TaskController } from './task.controller';
import { Task, TaskSchema } from './schema/task.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    MulterModule.register({
      dest: './uploads', // Destination folder for uploaded files
    }),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class taskModule {}
