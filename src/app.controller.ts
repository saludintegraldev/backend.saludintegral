import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.services";



@Controller()
export class AppController {
    constructor(private readonly appService: AppService){}

    @Get('mailer')
    sendMail(){
        return this.appService.sendMail();
    }
}