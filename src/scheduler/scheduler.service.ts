import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { GetSchedulerDTO } from './dto/get-scheduler.dto';
import { SchedulerResponse } from './interfaces/schedulers-response.interface';

const BASE_URL = 'http://microservicegomedisys.eastus2.cloudapp.azure.com:9047/api';
const keyWS = '6B26F209-9669-484B-B8F3-9B3D499963DE'

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
        `${BASE_URL}/Appointment/GetScheduler/${keyWS}/${data.idExam}/${data.initialDate} 00:00/${data.lastDate} 23:59`, {
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

  async getExams(){
    const extToken = await this.generateToken();
    const getExams = await this.axios.get(
      `${BASE_URL}/Appointment/GetListsForAppointments/Exams/${keyWS}`, {
        headers:{ Authorization: `Bearer ${extToken}` },
      }
    )
    return getExams.data;
  }

  async getInsurances(){
    const extToken = await this.generateToken();
    const getInsurances = await this.axios.get(
      `${BASE_URL}/Appointment/GetListsForAppointments/insurances/${keyWS}`,
      {
        headers:{
          Authorization: `Bearer ${extToken}`
        }
      }
    )
    return getInsurances.data;
  }

  async choiceAppointment( createAppointmentDto:CreateAppointmentDto ){
    try {
      const extToken = await this.generateToken();
      const  resp  = await this.axios.post(
        `${BASE_URL}/Appointment/CreateAppointment`,
        {
          headers:{ Authorization: `Bearer ${extToken}` },
          body: { ...createAppointmentDto }
        }
      ).then()
      // return resp.data
      // return appoiment.data;
    } catch(error){
      return error.response
    }
    
  }  


}
