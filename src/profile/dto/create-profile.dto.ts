import { Expose } from "class-transformer";
import { isBoolean, IsBoolean, IsDate, IsEmail, IsInt, isNotEmpty, IsNotEmpty, IsOptional, isString, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto{
    @Expose()
    @IsString({message:'First Name Should be string value'})
    @IsNotEmpty({ message: 'First Name should not empty' })
    @IsOptional()
    @MinLength(3, { message: 'First Name should have minimum 3 charachters.' })
    @MaxLength(100)
    firstName?: string ;

    @Expose()
    @IsString({ message: 'Last Name Should be string value' })
    @IsNotEmpty({ message: 'Last Name should not empty' })
    @IsOptional()
    @MinLength(3, { message: 'Last Name should have minimum 3 charachters.' })
    @MaxLength(100)
    lastName?: string ;


    @Expose()
    @IsString()
    @IsOptional()
    @MaxLength(10)
    gender?: string;

    @Expose()
    @IsDate()
    @IsOptional()
    dateOfBirth?: Date
    
    @Expose()
    @IsString()
    @IsOptional()
    bio?: string
    
    @Expose()
    @IsString()
    @IsOptional()
    profileImage?: string
}