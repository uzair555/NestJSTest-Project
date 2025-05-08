import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number = 1

    @Column({
        type: 'varchar',
        nullable: true,
        length: 100
    })
    firstName: string = '';

    @Column({
        type: 'varchar',
        nullable: true,
        length: 100
    })
    lastName: string = '';

    @Column(
        {
            type: 'varchar',
            nullable: true,
            length: 10
        }
    )
    gender: string = '';

    @Column({
        type: "timestamp",
        nullable:true
    })
    dateofbirth: Date = new Date

    @Column({
        type: "text",
        nullable: true
    })
    bio: string = ''

    @Column({
        type: "text",
        nullable: true
    })
    profileImage: string = ''
}