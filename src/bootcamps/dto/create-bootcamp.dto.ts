import { IsNotEmpty,IsAlpha, IsDate, IsInt, Matches}  from 'class-validator';
export class CreateBootcampDto {
    @IsNotEmpty()
    @IsAlpha()
    readonly name:string;

    @IsInt({message:"El telefono debe ser de tipo numerico"})
    readonly phone:number;

    @IsNotEmpty()
    readonly adress:string;

    @IsNotEmpty()
    readonly topics:string;

    @IsNotEmpty()
    @IsInt()
    readonly averageRaiting:number;

    readonly createAt:Date;
}
