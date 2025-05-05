// import { Expose } from "class-transformer";
// import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";


// export class UpdateUserDto{
//   @Expose()
//   @IsNumber()
//   @IsOptional()
//   id?: number=0;


//     @Expose()
//     @IsString({message:'Name Should be string value'})
//     @IsNotEmpty({message:'Name should not empty'})
//     @MinLength(3, { message: 'Name should have minimum 3 charachters.' })
//     @IsOptional()
//     name?: string = '';


//     @Expose()
//     @IsString()
//     @IsOptional()
//     gender?: string;


//     @Expose()
//     @IsOptional()
//     @IsEmail({},{message:'Invalid email Address'})
//     email?: string = '';


//     @Expose()
//     @IsOptional()
//     @IsBoolean()
//     married?: boolean;
// }


import { PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";



export class UpdateUserDto extends PartialType(CreateUserDto) { }