import { timeStamp } from "console"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Course } from "src/courses/entities/course.entity"
import { Review } from "src/reviews/entities/review.entity"
import { User } from "src/users/entities/user.entity"


@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id:number

    @Column('varchar', {length:20})
    name:string

    
    @Column('int')
    phone:number


    @Column('varchar' , {length:100, default:"XXXXX"})
    adress: string

    @Column('text')
    topics: string

    @Column('double')
    averageRaiting: number

    @Column({type:"timestamp", name:'create_at',
            default:()=>'CURRENT_TIMESTAMP'
    })
    createAt:Date

    @OneToMany(()=>Course,(course)=>course.bootcamp)
    courses: Course[]

    @OneToMany(()=>Review,(review)=>review.bootcamp)
    review:Review[]

    @ManyToOne(()=>User,(User)=>User.bootcamp)
    user:User
}
