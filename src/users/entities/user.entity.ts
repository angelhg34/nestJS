import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


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
}
enum roles{
    'Admin',
    'Usuario',
    'Editor'
}

