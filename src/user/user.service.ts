import { Injectable } from '@nestjs/common';
import type { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
    users: CreateUserDto[] = [
        { id: 1, name: "john", email: 'john@gmail.com', gender: 'male', married: true },
        { id: 2, name: "alex", email: 'alex@gmail.com', gender: 'male', married: true }
    ]

    getAllUser() {
        return this.users;
    }

    getUserById(id:Number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: CreateUserDto) {
        return this.users.push(user)
    }

}
