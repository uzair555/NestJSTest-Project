import { forwardRef, Inject, Injectable } from '@nestjs/common';
import type { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import  { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) { }
    

   public async getAllUser() {
       return await this.userRepository.find()
    }

    getUserById() {
        
    }

   public async createUser(userDto:CreateUserDto) {
    // const user= await this.userRepository.findOne({
    //        where: { email:userDto.email}
    // })
    //    if (user) {
    //        return "the User with the given email already exist!"
    //    }

    //    let newUser = this.userRepository.create(userDto)
    //    newUser = await this.userRepository.save(newUser)
    //    return newUser;
   
       
       // first create a profile and save
    //    userDto.profile=userDto.profile ?? {}
    //    let profile = this.profileRepository.create(userDto.profile) 
    //    await this.profileRepository.save(profile)

       //create a user Object
       let user = this.userRepository.create(userDto)
       
       //set the profile
    //    user.profile = profile
       
       //save the user object

       this.userRepository.save(user)
   
   }

}
