import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getAllBootcamps():string{
        return "Aqui se mostraran todos los bootcamps"
    }

    @Get(":id")
    getBootCampId(@Param('id') id:string):string{
        return `Aqui se va a mostrar el bootcamp con id ${id}`
    }

    @Post()
    createBootCamp():string{
        return "Aqui se van a crear bootcamps"
    }

    @Put(":id")
    updateBootCamp(@Param('id') id:string):string{
        return `Aqui se va actualizar el bootcamp: ${id}`
    }

    @Delete(":id")
    deleteBootCamp(@Param('id') id:string):string{
        return `Aqui se va eliminar el bootcamp: ${id}`
    }
}
