import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { DoctorsModule } from 'src/doctors/doctors.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ DoctorsModule ]
})
export class SeedModule {}
