import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './controllers/bootcamp/bootcamp.controller';
import { CourseController } from './controllers/course/course.controller';
import { ReviewController } from './controllers/review/review.controller';
import { UserController } from './controllers/user/user.controller';


@Module({
  imports: [],
  controllers: [AppController,BootcampController,CourseController,ReviewController,UserController],
  providers: [AppService],
})
export class AppModule {}
