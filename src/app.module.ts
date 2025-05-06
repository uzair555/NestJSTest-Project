import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TweetModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
