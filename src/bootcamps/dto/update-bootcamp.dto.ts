import { PartialType } from '@nestjs/mapped-types';
import { CreateBootcampDto } from './create-bootcamp.dto';

export class UpdateBootcampDto extends PartialType(CreateBootcampDto){

    //EL SIGNO "?" SIRVE PARA IDENTFICAR QUE LOS ATRIBUTOS SON OCPIONALES

    // readonly name?:string;
    // readonly phone?:number;
    // readonly adress?:string;
    // readonly topics?:string;
    // readonly averageRaiting?:number;
    // readonly createAt?:Date; 

}
