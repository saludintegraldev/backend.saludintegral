import { IsBoolean, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"

export class CreateAppointmentDto {

    @IsString()
    keyWS: string

    @IsString()
    @MinLength(1)
    documentPatient: string
    
    @IsNumber()
    @IsPositive()
    idSlot: number

    @IsNumber()
    @IsInt()
    idExam: number

    @IsString()
    @MinLength(1)
    codeExamType: string

    @IsString()
    @MinLength(1)
    codeContract: string

    @IsString()
    @MinLength(1)
    codePlan: string

    @IsString()
    @MinLength(1)
    codeRegime: string

    @IsString()
    @MinLength(1)
    codeTypeAffiliate: string

    @IsString()
    @MinLength(1)
    codeLevelAffiliate: string

    @IsString()
    @IsOptional()
    note: string

    @IsString()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    cellPhone: string

    @IsBoolean()
    @IsOptional()
    emailActive: boolean

    @IsBoolean()
    @IsOptional()
    smsActive: boolean

    

}

//TODO: Utilizar el decorador @IsIn([opcion1, opcion2, opcion 3]) para definir las pociones que aceptan los datos que vienen de el frontend

    
   
