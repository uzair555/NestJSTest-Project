import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers:[UserController],
    providers: [UserService],
    exports: [UserService],
    imports: [forwardRef(() => AuthModule) ]
})
export class UserModule {}
