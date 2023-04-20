import { IsString, MinLength } from "class-validator";


export class CreateInsuranceDto {

    @IsString()
    @MinLength(1)    
    codeContract: string;

    @IsString()
    @MinLength(1)
    nameContract: string;

    @IsString()
    @MinLength(1)
    codePlan: string;

    @IsString()
    @MinLength(1)
    codeRegime: string;

    @IsString()
    @MinLength(1)
    codeTypeAffiliate: string;

    @IsString()
    @MinLength(1)
    codeLevelAffiliate: string;

}
