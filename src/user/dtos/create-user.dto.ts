import { Expose, Transform } from "class-transformer";
import {  isBoolean, IsBoolean, IsEmail, IsInt, isNotEmpty, IsNotEmpty, IsOptional, isString, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{


    @Expose()
    @IsNotEmpty({ message: 'Email should not empty' })
    @IsEmail({}, { message: 'Invalid email Address' })
    @MaxLength(100)
    email: string = '';


    @IsNotEmpty()
    @MaxLength(24)
    username: string = ''

    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(100)
    password?: string

    // @Expose()
    // @IsInt({ message: 'ID must be an integer' })
    // @IsNotEmpty()
    // id: number=0;


    // @Expose()
    // @IsString({message:'First Name Should be string value'})
    // @IsNotEmpty({message:'First Name should not empty'})
    // @MinLength(3, { message: 'First Name should have minimum 3 charachters.' })
    // @MaxLength(100)
    // firstName: string = '';

    // @Expose()
    // @IsString({ message: 'Last Name Should be string value' })
    // @IsNotEmpty({ message: 'Last Name should not empty' })
    // @MinLength(3, { message: 'Last Name should have minimum 3 charachters.' })
    // @MaxLength(100)
    // lastName: string = '';


    // @Expose()
    // @IsString()
    // @IsOptional()
    // @MaxLength(10)
    // gender?: string;

    
        // @Expose()
        // @IsOptional()
        // @IsBoolean()
        // @Transform(({ value }) => value === 'true')
        // @MaxLength(10)
        // married?: boolean;

  


}
