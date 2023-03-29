import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";


export const RawHeaders = createParamDecorator(
    ( data: string , ctx: ExecutionContext ) => {
        const req = ctx.switchToHttp().getRequest();
        return req.rawHeaders;
    }
);

//!OJO: si no se usa borrarlo solo este en el get private