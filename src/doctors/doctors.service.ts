import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import { validate as isUUID } from 'uuid';
import { PaginationDto } from 'src/common/dto/pagination.dto';

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

  findAll(paginationDto: PaginationDto) {
    const { limit = 20, offset = 0 } = paginationDto;
    return this.doctorRepository.find({
      take: limit,
      skip: offset,
    });
  }
  
  async findOne(term: string) {
    let doctor: Doctor;
    if ( isUUID(term) ){
      doctor = await this.doctorRepository.findOneBy({ id: term });
    } else {
      doctor = await this.doctorRepository.findOneBy({ slug: term });
    }
    if ( !doctor )
      throw new NotFoundException(`Doctor with id: ${ term  } not found`);
    return doctor
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    const doctor = await this.doctorRepository.preload({
      id: id,
      ...updateDoctorDto
    });
    if( !doctor ) throw new NotFoundException(`Doctor with id ${id} not found`);
    try {
      await this.doctorRepository.save( doctor );
      return doctor; 
    } catch (error) {
      this.handlerDBExeptions( error )
    }
  }

  async deleteAllDoctors(){
    const query = this.doctorRepository.createQueryBuilder('doctors');
    try {
      return await query
      .delete()
      .where({})
      .execute();
    } catch (error) {
      this.handlerDBExeptions(error)
    }
  }

  async remove(id: string) {
    const doctor = await this.findOne( id );
    await this.doctorRepository.remove( doctor );
    return `This action removes id: ${id} doctor`;
  }

  private handlerDBExeptions( error: any ){
    if ( error.code === '23505' )
        throw new BadRequestException(error.detail);
      this.logger.error(error)
      console.log(error)
      throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
