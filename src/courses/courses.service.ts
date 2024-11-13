import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course, minimumSkill } from './entities/course.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';


@Injectable()
export class CoursesService {

  constructor(@InjectRepository(Course)   
    private courseRepository:Repository<Course>,
    @InjectRepository(Bootcamp)   
    private bootcampRepository:Repository<Bootcamp>
  ){

    }

  async create(body: CreateCourseDto) {
    //1. desestructurar el dto
    const{
      title,
      description,
      weeks,
      tuition,
      minimum_skill,
      bootcampId
    }=body
    //2. hallar el objeto bootcamp que tenga esa id
    const bootcampById=await this.bootcampRepository.findOneBy({id:bootcampId})
    //3. Crear una instancia de course
    const newCourse= new Course()
    newCourse.title=title
    newCourse.description=description
    newCourse.weeks= weeks
    newCourse.tuition=tuition
    newCourse.minimum_skill=minimum_skill

    newCourse.bootcamp= bootcampById

    return this.courseRepository.save(newCourse)
    // const newCourse=this.courseRepository.create(body)
    // return this.courseRepository.save(newCourse);
  }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: number) {
    return this.courseRepository.findOneBy({id});
  }

  async update(id: number, body: CreateCourseDto) {
    const updCourses= await this.courseRepository.findOneBy({id});
    this.courseRepository.merge(updCourses,body)
    return this.courseRepository.save(updCourses)
  }

  async remove(id: number) {
    const delCourse= await this.courseRepository.findOneBy({id});
    this.courseRepository.delete(delCourse)
    return delCourse

  }
}
