import { Controller, Post, Body } from '@nestjs/common';
import { SendMailDTO } from './dto/send-mail.dto';
import { SendmailService } from './sendmail.service';


@Controller('send')
export class SendmailController {
  constructor(private readonly sendmailService: SendmailService) {}

  @Post('mail')
  sendMail(@Body() sendMailDTO: SendMailDTO){
      return this.sendmailService.sendMail(sendMailDTO);
  }
}
