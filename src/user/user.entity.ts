import { Profile } from "src/profile/profile.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id?:number
    

    @Column({
        type: 'varchar',
        nullable: false,
        length: 24,
        unique: true
    })
    username: string = '';

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        unique:true
    })
    email: string = '';

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    password: string = ''
    @OneToOne(() => Profile,(profile)=>profile.user, {
        cascade: ['insert',],
        eager:true
    })
    @JoinColumn()
    profile?:Profile
    
    @CreateDateColumn()
    createdAt?: Date ;
    @UpdateDateColumn()
    updateAt?: Date ;

    @DeleteDateColumn()
    deletedAt?: Date 
}