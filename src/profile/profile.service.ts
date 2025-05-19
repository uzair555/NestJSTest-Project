import { Injectable } from '@nestjs/common';
import type { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfileService {
    
    constructor(
        @InjectRepository(Profile)
        private profileRepositry: Repository<Profile>
    ) { }

    public GetAllProfile() {
        return this.profileRepositry.find({
            relations: {
                user: true,
            }
        })
    }
}
