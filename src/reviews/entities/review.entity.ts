import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar",length: 50, nullable:true})
    title:string

    @Column({type:"varchar",length:50,nullable:true})
    comment:string

    @Column({type:"int"})
    raiting:number

    

    @ManyToOne(()=>Bootcamp,(Bootcamp)=>Bootcamp.review)
    bootcamp:Bootcamp

    @ManyToOne(()=>User,(User)=>User.review)
    users:User


}
