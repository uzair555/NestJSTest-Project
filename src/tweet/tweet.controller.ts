import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService: TweetService) { }
    
    // @Get(':userid?')
    @Get()
    public getTweets(
        // @Param('userId', ParseIntPipe) userid: number
        @Query('userId', ParseIntPipe) userId: number 
    ) {
        console.log('====================================');
        console.log(userId,"Userridddd");
        console.log('====================================');
        return this.tweetService.getTweets(userId)
    }
}
