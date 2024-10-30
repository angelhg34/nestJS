import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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




}
