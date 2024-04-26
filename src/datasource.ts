import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/task.entity"
import { type TypeOrmModuleOptions } from '@nestjs/typeorm';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "password",
    database: "todolist",
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: ['src/migrations/*.ts'],
});

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'todolist',
    synchronize: true,
    logging: false,
    entities: [Task],
    autoLoadEntities: true,
    migrations: ['dist/migrations/*.js'],
}
