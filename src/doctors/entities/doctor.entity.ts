import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text', {
        unique: true
    })
    name: string;

    @Column('text')
    gender: string;

    @Column('numeric')
    consultingRoom: number;

    @Column('text',{
        // array: true,
        // default:[],
        nullable: true
    })
    consultationDays: string;

    @Column('text')
    timeTable: string
    
    //Todo: agregar a la entidad la columna image
    // @Column('text')
    // image: string

    //Todo: hacer el beforeinsert para que el nombre del doctor ya tenga capitalizado el nombre

}
