import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


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

    @Column('date')
    createAt:Date

}
