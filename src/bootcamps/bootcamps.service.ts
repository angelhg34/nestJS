import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  //Inyectar:Obtener una instancia del repositorio como atriburo de la clase BootcampService
  constructor(@InjectRepository(Bootcamp) 
    private bootcampRepository: Repository<Bootcamp>){

  }
  create(payload: any) {
    //1. crear una instancia de una entity bootcamp
    //2. grabar esa instancia y retornar 
    const newBootcamp=this.bootcampRepository.create(payload);
    return this.bootcampRepository.save(newBootcamp)
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id});
  }

  async update(id: number, payload: any) {
    //Encontrar bootcampo por id
    //Hacer cambios por update: agregar cambios del payload a la entidad hallada en el punto 1
    const updBootcamp= await this.bootcampRepository.findOneBy({id});
    this.bootcampRepository.merge(updBootcamp,payload)
    return this.bootcampRepository.save(updBootcamp)
  }

  async remove(id: number) {
    const delBootcamp= await this.bootcampRepository.findOneBy({id});
    this.bootcampRepository.delete(delBootcamp)
    return delBootcamp
  }
}
