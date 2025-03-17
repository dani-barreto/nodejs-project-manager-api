import { Module } from '@nestjs/common';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';
import { UpdateTaskService } from './update-task.service';
import { GetAllTasksService } from './get-all-tasks.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports:[DatabaseModule],
    providers:[
        GetAllTasksService,
        GetTaskByIdService,
        CreateTaskService,
        UpdateTaskService
    ],
    exports:[
      GetAllTasksService,
      GetTaskByIdService,
      CreateTaskService,
      UpdateTaskService
  ],
})
export class TasksModule {}