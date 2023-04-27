import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDTO } from './dto/send-mail.dto';


@Injectable()
export class SendmailService {
  constructor(private readonly mailerServices: MailerService){}

  async sendMail(sendMailDTO: SendMailDTO) {
    const { ...sendMailData} = sendMailDTO;
      await this.mailerServices.sendMail({
          to: sendMailData.to,
          from: 'saludintegraldev@gmail.com',
          subject: sendMailData.subject,
          html: sendMailData.html
      }
    )
    return `email sending to ${sendMailData.to}`
  }
}
