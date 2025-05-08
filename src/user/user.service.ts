import { forwardRef, Inject, Injectable } from '@nestjs/common';
import type { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import  { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }
    

   public async getAllUser() {
       return await this.userRepository.find()
    }

    getUserById() {
        
    }

   public async createUser(userDto:CreateUserDto) {
    const user= await this.userRepository.findOne({
           where: { email:userDto.email}
    })
       if (user) {
           return "the User with the given email already exist!"
       }

       let newUser = this.userRepository.create(userDto)
       newUser = await this.userRepository.save(newUser)
       return newUser;
    }

}
