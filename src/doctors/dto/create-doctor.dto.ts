import { IsArray, IsIn, IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateDoctorDto {
    
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    fullName: string;

    @IsIn(['male', 'female'])
    gender: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    consultingRoom?: number;

    @IsString({ each: true})
    @IsArray()
    @IsOptional()
    consultationDays?: string[];

    @IsString()
    @IsOptional()
    timeTable?: string;

    @IsString()
    @IsOptional()
    slug?: string

}
