import { Expose, Transform } from "class-transformer";
import {  isBoolean, IsBoolean, IsEmail, IsInt, IsNotEmpty, IsOptional, isString, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @Expose()
    @IsInt({ message: 'ID must be an integer' })
    @IsNotEmpty()
    id: number=0;


    @Expose()
    @IsString({message:'Name Should be string value'})
    @IsNotEmpty({message:'Name should not empty'})
    @MinLength(3,{message:'Name should have minimum 3 charachters.'})
    name: string = '';


    @Expose()
    @IsString()
    @IsOptional()
    gender?: string;


    @Expose()
    @IsEmail({},{message:'Invalid email Address'})
    email: string = '';


    @Expose()
    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true')    
    married?: boolean;

    @Expose()
    @IsOptional()
    @IsString()
    password?:string


}
