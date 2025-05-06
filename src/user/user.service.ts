import { forwardRef, Inject, Injectable } from '@nestjs/common';
import type { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
    constructor(@Inject(forwardRef(()=>AuthService)) private readonly authService:AuthService){}
    users: CreateUserDto[] = [
        { id: 1, name: "john", email: 'john@gmail.com', gender: 'male', married: true,password:'test1234' },
        { id: 2, name: "alex", email: 'alex@gmail.com', gender: 'male', married: true,password:'test' }
    ]

    getAllUser() {
        if (this.authService.isAuthenticated) {
            return this.users;
        }
        return "User is not logged in"
    }

    getUserById(id:Number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: CreateUserDto) {
        return this.users.push(user)
    }

}
