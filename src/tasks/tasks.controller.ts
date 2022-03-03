import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';

import { Task } from './interfaces/Task';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get(':id') // Solicitar datos
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get('taskId')
    getTask(@Param('taskId') taskId): Task {
        return this.taskService.getTask(taskId);
    }

    @Post() // Enviar datos para almacenar
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task.title, task.description, task.done);
        return 'Creating a task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task number: ${id}`;
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDto, @Param('id') id): string {
        console.log(task);
        console.log(id);
        return 'Updating a task';
    }

    // getTasks(@Req() req, @Res() res): Response {
    //     return res.send("Hello world");
    // }

}
