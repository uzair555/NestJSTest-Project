import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly privateService: ProfileService) { }
    
    @Get()
    getProfile() {
        return this.privateService.GetAllProfile()
    }
}
