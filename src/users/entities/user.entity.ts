import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity'
import { Review } from 'src/reviews/entities/review.entity'
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"varchar",length: 50})
    name:string

    @Column({type:"varchar",length: 50})
    email:string

    @Column({name:'role'
        ,type:"enum",
        enum:[ 'Admin',
            'Usuario',
            'Editor']})
    role:roles


    @Column({type:"varchar",length: 50})
    password:string

    @OneToMany(()=>Review,(review)=>review.bootcamp)
    review:Review[]

    @OneToMany(()=>Bootcamp,(bootcamp)=>bootcamp.user)
    bootcamp:Bootcamp[]
}
enum roles{
    'Admin',
    'Usuario',
    'Editor'
}

