import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id:number

    @Column('varchar', {length: 50})
    title:string

    @Column('varchar', {length: 50})
    comment:string

    @Column('int')
    raiting:string




}
