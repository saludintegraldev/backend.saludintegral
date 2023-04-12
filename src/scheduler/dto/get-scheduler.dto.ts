import { IsDate, IsDateString, IsPositive, IsString } from "class-validator";

export class GetSchedulerDTO {

    @IsString()
    idExam: string;

    @IsDateString()
    initialDate: string;

    @IsDateString()
    lastDate: string;


}