import { Injectable, Module } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) { }

    async find(id: number): Promise<Task> | null {
        return await this.taskRepository.findOne({ where: { task_id: id } });
    }

    async findAll(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    async create(task: CreateTaskDTO): Promise<InsertResult> {
        return await this.taskRepository.insert(task);
    }
}