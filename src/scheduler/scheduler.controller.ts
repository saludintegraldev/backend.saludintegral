import { Controller, Get, Post, Body } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { GetSchedulerDTO } from './dto/get-scheduler.dto';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Controller('scheduler')
export class SchedulerController {

  constructor(private readonly schedulerService: SchedulerService) {}
  
  @Post('available')
  schedulersAvailable(@Body() getSchedulerDTO: GetSchedulerDTO) {
    return this.schedulerService.getScheduler(getSchedulerDTO);
  }

  @Post('create')
  createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.schedulerService.choiceAppointment(createAppointmentDto);
  }



  //!hacerle su propio resource al igual que insurances
  @Get('exams')
  getAllExams() {
    return this.schedulerService.getExams();
  }
}



