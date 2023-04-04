import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {
    constructor(private readonly mailerServices: MailerService){}

    sendMail() {
        this.mailerServices.sendMail({
            to: 'milangrisano@gmail.com',
            from: 'saludintegraldev@gmail.com',
            subject: 'Testing Nest MailerModule',
            text: 'Testing services Mailer NodeMailer',
            html: '<b>Welcome to Nodemailer Services</b>'
        })
    }
    
}