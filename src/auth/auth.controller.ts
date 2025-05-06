import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServic: AuthService) { }
    
    @Post()
    login(@Body() user: { email: string, password: string }) {
    return this.authServic.login(user.email,user.password)
    }   
}
