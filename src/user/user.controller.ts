import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

     @Get(':married')
     getUser(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
         @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
         @Param() param: GetUserParamDto

     )
     {
         console.log('====================================');
         console.log(param,"marrieddddddd");
         console.log('====================================');
        const userService = new UserService();
        return userService.getAllUser()
     }
    
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const userService = new UserService();
        return userService.getUserById(id)
    }

    
    @Post()
    // @UsePipes(new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     transform: true,
    // }))
    createUser(@Body() user: CreateUserDto) {
        // console.log(user instanceof CreateUserDto);
        console.log(user,"frommm creatingg userrrr");
        // const user={id:3,name:"marry",email:'marry@gmail.com',gender:"female",married:false}
        // const userService = new UserService();
        // userService.createUser(user)
        return "A New user has been created"
    }

    @Patch()
    // updateUser(@Body() user:UpdateUserDto) {
    //     console.log(user)
    //     return "User updated successfully"
    // }

    updateUser(@Body() body: any) {
        const transformed = plainToInstance(UpdateUserDto, body); // ✅ force transformation
        console.log(transformed);
        return 'User updated';
    }

}
