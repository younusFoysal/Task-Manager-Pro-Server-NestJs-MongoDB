import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestUser:AK3dyHk1La0SBDG2@cluster0.mquum9d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    TasksModule,
  ],
})
export class AppModule {}
