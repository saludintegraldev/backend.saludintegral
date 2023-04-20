import { Module } from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { InsurancesController } from './insurances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Insurance } from './entities/insurance.entity';

@Module({
  controllers: [InsurancesController],
  providers: [InsurancesService],
  imports: [
    TypeOrmModule.forFeature([ Insurance ])
  ]
})
export class InsurancesModule {}
