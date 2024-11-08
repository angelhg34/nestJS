import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
  private userRepository:Repository<User>){

  }

  create(payload: any) {
    const newUser=this.userRepository.create(payload)
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  async update(id: number, payload: any) {
    const updUser= await this.userRepository.findOneBy({id});
    this.userRepository.merge(updUser,payload)
    return this.userRepository.save(updUser)
  }

  async remove(id: number) {
    const delUser= await this.userRepository.findOneBy({id});
    this.userRepository.delete(delUser)
    return delUser
  }
}
