import { IsDate, IsDecimal, IsEmpty, IsEnum, IsIn, IsInt, IsNotEmpty, Matches } from 'class-validator'
import { minimumSkill } from '../entities/course.entity';
import { Double } from 'typeorm';
export class CreateCourseDto {

    @IsNotEmpty({message:"El campo esta vacio"})
    readonly title:string;

    @IsNotEmpty({message:"El campo esta vacio"})
    readonly description:string;
    
    @IsNotEmpty({message:"El campo esta vacio"})
    @IsInt({message:"Las weeks son de tipo number"})
    @IsIn([4,8])
    readonly weeks:number;

    @IsNotEmpty({message:"El campo esta vacio"})
    readonly tuition:number;

    @IsNotEmpty({message:"El campo esta vacio"})
    @IsEnum(minimumSkill,{message:"No se puede registrar datos fuera del enum"})
    readonly minimum_skill:minimumSkill;

    readonly creatAt:Date;


    @IsInt()
    readonly bootcampId: number

}
