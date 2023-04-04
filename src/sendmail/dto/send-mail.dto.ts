import { IsEmail, IsOptional, IsString, Length } from "class-validator";



export class SendMailDTO {

    @IsString()
    @IsEmail()
    to: string;

    @IsString()
    @Length(6,100)
    subject: string;
        
    @IsString()
    @IsOptional()
    @Length(6,200)
    html?: string;

}