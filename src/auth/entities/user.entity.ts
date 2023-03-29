import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    email: string;

    @Column('text',{
        select: false
    })
    password: string;

    @Column('text')
    fullName: string;

    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string [];

    @Column('text', {
        array: true,
        nullable: true,
    })
    pathology: string

    @BeforeInsert()
    checkFieldBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }
    @BeforeInsert()
    checkFieldBeforeUpdate(){
        this.checkFieldBeforeInsert();
    }
}
