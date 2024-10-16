import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entitys/Student.entity';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  //endpoint: puertas del software
  //Acepta peticiones de cliente bajo una url semantica
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Segundo enpoint - ESTRUCTURA DE UN ENDPOINT
  //1. Metodo http sobre le cual recibir
  //3. Firma del metodo a ejecutar
  @Get("/ficha")
  getFicha(): string{
    return "endpoint de la ficha 2902093"
  }

  // el "+" sirve para convertir a numero, los ":" indican que es un parametro
  @Get("/identificacion/:id/ciudad/:ciudad")
  identificacion(@Param('id') id:string ,
                  @Param('ciudad') ciudad:string,
                  @Query('nombre') nombre:string,
                  @Query('edad') edad:number)
                  :Student{
    return new Student(+id,nombre,edad,ciudad);
  }

}
