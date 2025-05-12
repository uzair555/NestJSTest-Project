import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
// import { GetUserParamDto } from './dtos/get-user-param.dto';
// import { UpdateUserDto } from './dtos/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

     @Get()
     getUser(
        
     )
     {
         return this.userService.getAllUser()

     }
    
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        // const userService = new UserService();
        // return this.userService.getUserById(id)
    }

    
    @Post()
    createUser(@Body() user: CreateUserDto) {
       
        this.userService.createUser(user)
        
        // return "User Created"
    }

    @Patch()
    updateUser(@Body() body: any) {
        
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number) {
        this.userService.deleteUser(id)
    }

}
