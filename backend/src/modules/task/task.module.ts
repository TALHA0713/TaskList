import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TaskController } from './task.controller';
import { Task, TaskSchema } from './schema/task.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class taskModule {}
