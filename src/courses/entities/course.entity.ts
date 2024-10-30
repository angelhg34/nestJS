import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar',length: 50,nullable:true})
    title:string

    @Column('varchar', {length: 60})
    description:string

    @Column({type:"int", nullable:true, default:4})
    weeks:number

    @Column({type:"double",nullable:true})
    tuition:number

    @Column({name:'minimum_skill'
        ,type:"enum",
        enum:[ 'Beginner',
            'Intermediate',
            'Advance']})
    minimum_skill:minimumSkill

    @Column({type:"timestamp", name:'create_at',
        default:()=>'CURRENT_TIMESTAMP'
        })
    createAt:Date

}

enum minimumSkill{
    'Beginner',
    'Intermediate',
    'Advance'
}
