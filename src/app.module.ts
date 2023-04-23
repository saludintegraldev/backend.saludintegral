import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SendmailModule } from './sendmail/sendmail.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { InsurancesModule } from './insurances/insurances.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      //* Solo se utiliza en produccion
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl: process.env.STAGE === 'prod'
              ? { rejectUnauthorized: false }
              : null,
      },
      //* Comentarlo en dev
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,//! En produccion TRUE 
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_API_KEY,
        }
      }
    }),
    AuthModule,
    SendmailModule,
    SchedulerModule,
    InsurancesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
