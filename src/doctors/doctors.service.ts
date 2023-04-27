import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {

  private readonly logger = new Logger('DoctorsService');
  
  constructor(
    @InjectRepository( Doctor )
    private readonly doctorRepository: Repository<Doctor>
  ){}

  async create(createDoctorDto: CreateDoctorDto) {
    try {
      const doctor = this.doctorRepository.create(createDoctorDto);
      await this.doctorRepository.save( doctor );
      return doctor;
    } catch (error) {
      this.handlerDBExeptions(error);
    }
  }

  private handlerDBExeptions( error: any ){
    if ( error.code === '23505' )
        throw new BadRequestException(error.detail);
      this.logger.error(error)
      console.log(error)
      throw new InternalServerErrorException('Unexpected error, check server logs');
  }

  // findAll() {
  //   return `This action returns all doctors`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} doctor`;
  // }

  // update(id: number, updateDoctorDto: UpdateDoctorDto) {
  //   return `This action updates a #${id} doctor`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} doctor`;
  // }
}
