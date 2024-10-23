import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id:number

    @Column('varchar', {length: 50})
    title:string

    @Column('varchar', {length: 60})
    description:string

    @Column('int')
    weeks:number

    @Column('int')
    tuition:number

    @Column('varchar', {length: 30})
    minimumSkill:minimumSkill

    @Column('date')
    createAt:Date

}

enum minimumSkill{
    'Beginner',
    'Intermediate',
    'Advance'
}
