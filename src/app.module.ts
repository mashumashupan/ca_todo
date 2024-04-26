import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { typeormConfig } from './datasource'

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }