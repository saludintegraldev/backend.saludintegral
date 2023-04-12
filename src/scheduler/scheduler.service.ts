import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateSchedulerDto } from './dto/create-scheduler.dto';
import { GetSchedulerDTO } from './dto/get-scheduler.dto';
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
  
  async getScheduler(getSchedulerDTO: GetSchedulerDTO){
    try {
      const extToken = await this.generateToken();
      const data = getSchedulerDTO;
      //TODO:revisar la interface de SchedulerResponse para hacerla lo mas generica posible
      const schedulerResponse = await this.axios.get<SchedulerResponse>(
        `${BASE_URL}/Appointment/GetScheduler/6B26F209-9669-484B-B8F3-9B3D499963DE/${data.idExam}/${data.initialDate} 00:00/${data.lastDate} 23:59`, {
          headers: {
            Authorization: `Bearer ${extToken}`
          }
        }
      )
      return schedulerResponse.data;
    } catch (error) {
      throw new InternalServerErrorException('No se encontro disponibilidad para esta agenda');
      //TODO: Controlar el error con las validacione de FH para capturar el error especifico 
    }
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
