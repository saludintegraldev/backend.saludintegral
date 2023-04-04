import { Module } from '@nestjs/common';
import { SendmailService } from './sendmail.service';
import { SendmailController } from './sendmail.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [SendmailController],
  providers: [SendmailService]
})
export class SendmailModule {}
