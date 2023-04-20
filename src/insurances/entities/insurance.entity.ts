import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Insurance {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column('text')
    codeContract: string;

    @Column('text')
    nameContract: string;

    @Column('text')
    codePlan: string;

    @Column('text')
    codeRegime: string;

    @Column('text')
    codeTypeAffiliate: string;

    @Column('text')
    codeLevelAffiliate: string;

}
