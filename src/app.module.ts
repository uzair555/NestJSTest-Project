import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule, TweetModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject:[],
      useFactory: () => ({
      type: 'postgres',
        // entities: [User],
      autoLoadEntities:true,
      synchronize: true,
      host: 'localhost',
      port: 5432,
      username: 'mac',
      password: '1234',
      database: 'mydb'
      })
    }
  ), ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
