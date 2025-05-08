import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number=1
    

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
    
    @CreateDateColumn()
    createdAt: Date = new Date;
    @UpdateDateColumn()
    updateAt: Date = new Date;

    @DeleteDateColumn()
    deletedAt: Date = new Date;
}