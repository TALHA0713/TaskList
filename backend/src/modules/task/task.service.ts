import {
  ConflictException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { create_task } from './dto/create_task.dto';
import { Http500 } from 'src/utils/Http500';
import { Task } from './schema/task.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly TaskModel: Model<Task>,
  ) {}

  /*****************************************************************************************************************
     Create Task
     *****************************************************************************************************************/

  async create(createTaskDto: create_task): Promise<Task> {
    try {
      const newTask = new this.TaskModel(createTaskDto);
      const Task = await newTask.save();
      // console.log(Task);
      
      return Task;
    } catch (error) {
      Http500.throw(error);
    }
  }

  /*****************************************************************************************************************
     Find All Tasks
     *****************************************************************************************************************/

  async findAll(): Promise<Task[]> {
    try {
      return await this.TaskModel.find().populate('users').populate({
        path: 'users',
        select: '-password' 
      }).exec();
    } catch (error) {
      throw new NotFoundException('No Tasks found');
    }
  }

  /*****************************************************************************************************************
     Find One Task
     *****************************************************************************************************************/

  async findOne(id: string): Promise<Task> {
    try { 
      const task = await this.TaskModel.findById(id).populate({
        path: 'users',
        select: '-password' 
      }).exec();
  

      if (!Task) {
        throw new NotFoundException('Task not found');
      }

      return task;
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }

  /*****************************************************************************************************************
     Update Task
     *****************************************************************************************************************/

  async update(id: string, updateTaskDto: create_task): Promise<Task> {
    try {
      await this.TaskModel.findByIdAndUpdate(id, updateTaskDto).exec();
      return await this.findOne(id);
    } catch (error) {
      Http500.throw(error);
    }
  }

  /*****************************************************************************************************************
     Delete Task
     *****************************************************************************************************************/

  async remove(id: string): Promise<Task> {
    try {
      return await this.TaskModel.findByIdAndDelete(id);
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }
}
