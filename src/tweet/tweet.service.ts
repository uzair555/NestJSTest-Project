import { Injectable } from '@nestjs/common';
import  { UserService } from 'src/user/user.service';

@Injectable()
export class TweetService {
    constructor(private userService: UserService) { }
    
    // tweets: {text: String, date: Date, userId: Number} [] = [
    //     { text: 'this is the tweet', date: new Date('2024-11-12'), userId: 1 },
    //     {text:'this is other tweet',date:new Date('2024-08-12'),userId:1},
    //     { text: 'this is the some more tweet', date: new Date('2023-11-12'), userId: 2 },
    // ];

    getTweets(userId: Number) {

        // const user =this.userService.getUserById(userId)
        // const tweets = this.tweets.filter(x => x.userId == userId)
        // const response = tweets.map((y) => {return { text: y.text,date:y.date, name:user?.firstName }})
        // return response
    }
}
