import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { SchedulerController } from './scheduler.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
  ],
  controllers: [SchedulerController],
  providers: [SchedulerService]
})
export class SchedulerModule {}
