import { IsArray, IsIn, IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateDoctorDto {
    
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    name: string;

    @IsIn(['male', 'female'])
    gender: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    consultingRoom?: number;

    @IsString()
    @IsOptional()
    // @IsArray()
    consultationDays?: string;

    @IsString()
    @IsOptional()
    timeTable?: string;

}
