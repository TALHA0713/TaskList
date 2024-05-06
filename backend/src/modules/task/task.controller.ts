import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TaskService } from './task.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Task } from './schema/task.schema';
import { AuthGuard } from '@nestjs/passport';
import { create_task } from './dto/create_task.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Public } from 'src/auth/decorators/setmetadata.decorator';
import { log } from 'console';

@ApiBearerAuth()
@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  /*****************************************************************************************************************
     Create Task
     *****************************************************************************************************************/

  @ApiOkResponse({
    description: 'task Created Successfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'Some Unknown Error Occurred',
  })
  @ApiOperation({ description: 'Create New Task' })
  @Public()
  @Post()
  async create(@Body() create: create_task ): Promise<Task> {
    const Task= this.taskService.create(create);
    return Task;

  }

  /*****************************************************************************************************************
     Find All Task
     *****************************************************************************************************************/

  @ApiOkResponse({
    description: 'Tasks Found Successfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'Some Unknown Error Occurred',
  })
  @ApiOperation({ description: 'Get All Tasks' })
  @ApiNotFoundResponse({
    description: 'TAsks Not Found',
  })
  @Public()
  @Get()
  findAll(): any {
    return this.taskService.findAll();
  }

  /*****************************************************************************************************************
     Find One Task
     *****************************************************************************************************************/

  @ApiOkResponse({
    description: 'Task Found Successfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'Some Unknown Error Occurred',
  })
  @ApiOperation({ description: 'Get Specific Task' })
  @ApiNotFoundResponse({
    description: 'Task Not Found',
  })
  @Public()
  @Get(':id')
    @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  /*****************************************************************************************************************
     Update Task
     *****************************************************************************************************************/

  @ApiOkResponse({
    description: 'Task Updated Successfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'Some Unknown Error Occurred',
  })
  @ApiOperation({ description: 'Update Task' })
  @UseGuards(AuthGuard('jwt'))
  @Patch('update')
  update(@Request() req, @Body() updateTaskDto: create_task) {
    const { id } = req.Task;
    return this.taskService.update(id, updateTaskDto);
  }

  /**********Task *******************************************************************************************************
     Delete Task
     *****************************************************************************************************************/

  @ApiOkResponse({
    description: 'Task Deleted Successfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'Some Unknown Error Occurred',
  })
  @ApiOperation({ description: 'Delete Task' })
  @ApiNotFoundResponse({
    description: 'Task Not Found',
  })
  @Public()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
