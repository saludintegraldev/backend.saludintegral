import { IsEmail, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterUserDTO {

    @IsString()
    @Length(2, 100)
    fullName: string;
    
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Length(6,50)
    // @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;
}