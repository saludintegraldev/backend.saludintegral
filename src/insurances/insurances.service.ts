import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios, { AxiosInstance } from 'axios';
import { Repository } from 'typeorm';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { Insurance } from './entities/insurance.entity';

const BASE_URL = 'http://microservicegomedisys.eastus2.cloudapp.azure.com:9047/api';
const keyWS = '6B26F209-9669-484B-B8F3-9B3D499963DE';

@Injectable()
export class InsurancesService {

  constructor(
    @InjectRepository(Insurance)
    private readonly insurancesRepository: Repository<Insurance>,
  ){}

  private readonly axios: AxiosInstance = axios;
  
  async generateToken(){
    const goToken = await this.axios.post(
      `${BASE_URL}/token`,
      {
        Username: process.env.GO_USER_NAME,
        Password: process.env.GO_PASSWORD,
      }
    )
    return goToken.data;
  }

  async getInsurances(){
    const extToken = await this.generateToken();
    const getInsurances = await this.axios.get(
      `${BASE_URL}/Appointment/GetListsForAppointments/insurances/${keyWS}`,{
        headers:{
          Authorization: `Bearer ${extToken}`
        }
      }
    )
    const insurancesproperty = this.insurancesRepository.create(getInsurances.data);
    await this.insurancesRepository.save(insurancesproperty)
    return getInsurances.data;
  }

  // async update( id: string, updateInsuranceDto: UpdateInsuranceDto ){
  //   const insurances = await this.insurancesRepository.preload({
  //     id: id,
  //     ...updateInsuranceDto
  //   });
  //   return this.insurancesRepository.save( insurances );
  // }
}
