import { Injectable } from '@nestjs/common';
import { DoctorsService } from './../doctors/doctors.service';
import { initialData } from './data/doctor-seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly doctorService: DoctorsService
  ){}

  async runSeed() {
    await this.insertDoctorSeed();
    return 'Seed Executed';
  }

  private async insertDoctorSeed(){
    await this.doctorService.deleteAllDoctors();
    const doctors = initialData.doctors;
    const insertPromises = [];
    doctors.forEach( doctor => {
      insertPromises.push(this.doctorService.create( doctor ))
    });
    await Promise.all( insertPromises );
    return true;
  }
}
