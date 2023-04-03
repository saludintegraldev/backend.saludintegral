import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,//!Nota: se debe tener en cuenta que los usuarios si pueden tener un mismo email por que podrias abrir un usuario a un familiar bien sea menor de edad o de la tercera edad
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
        default: 'ByRegister'
    })
    CreateBY: string    

    @CreateDateColumn()
    CreateOn: string

    @BeforeInsert()
    checkFieldBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }
    @BeforeInsert()
    checkFieldBeforeUpdate(){
        this.checkFieldBeforeInsert();
    }
}
