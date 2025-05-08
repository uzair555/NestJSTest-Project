import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(()=>UserService)) private readonly userService: UserService) { }
    
     isAuthenticated:boolean = false;

    login(email:string,password:string) {
        // const user = this.userService.users.find(x => x.email === email && x.password === password);
        // if (user) {
        //     this.isAuthenticated=true
        //     return "This is the Token"
        // }
        return "User not found"
    }
}
