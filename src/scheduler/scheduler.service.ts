import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateSchedulerDto } from './dto/create-scheduler.dto';
import { UpdateSchedulerDto } from './dto/update-scheduler.dto';
import { SchedulerResponse } from './interfaces/schedulers-response.interface';

const BASE_URL = 'http://microservicegomedisys.eastus2.cloudapp.azure.com:9047/api';



@Injectable()
export class SchedulerService {

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
  
  async getScheduler(){
    const extToken = await this.generateToken();
    const {data} = await this.axios.get<SchedulerResponse>(
      `${BASE_URL}/Appointment/GetScheduler/6B26F209-9669-484B-B8F3-9B3D499963DE/06/2023-04-12 00:00/2023-04-30 23:59`, {
        headers: {
          Authorization: `Bearer ${extToken}`
        }
      }
    )
    return data;
  }

  



  //!Generados Automaticamente por el cli de nest !!Para borrar o usar!!
  create(createSchedulerDto: CreateSchedulerDto) {
    return 'This action adds a new scheduler';
  }

  findAll() {
    return `This action returns all scheduler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduler`;
  }

  update(id: number, updateSchedulerDto: UpdateSchedulerDto) {
    return `This action updates a #${id} scheduler`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduler`;
  }
}
