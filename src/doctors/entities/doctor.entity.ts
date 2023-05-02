import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text', {
        unique: true
    })
    fullName: string;

    @Column('text')
    gender: string;

    @Column('numeric')
    consultingRoom: number;

    @Column('text',{
        array: true,
        default:[],
    })
    consultationDays: string[];

    @Column('text')
    timeTable: string

    @Column('text', {
        unique: true,
    })
    slug: string;
    
    //Todo: agregar a la entidad la columna image
    // @Column('text')
    // image: string

    @BeforeInsert()
    checkBeforeInsert(){
        if(!this.slug){
            this.slug = this.fullName
            .toLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
        }
        this.fullName = this.fullName
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase());
    }

    @BeforeUpdate()
    updateSlug(){
        this.slug = this.fullName
            .toLowerCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
    }
}
