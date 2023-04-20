import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { CreateSchedulerDto } from './dto/create-scheduler.dto';
import { UpdateSchedulerDto } from './dto/update-scheduler.dto';
import { GetSchedulerDTO } from './dto/get-scheduler.dto';

@Controller('scheduler')
export class SchedulerController {

  constructor(private readonly schedulerService: SchedulerService) {}
  
  @Post('params')
  catchParams(@Body() getSchedulerDTO: GetSchedulerDTO) {
    return this.schedulerService.getScheduler(getSchedulerDTO);
  }

  @Get('exams')
  getAllExams() {
    return this.schedulerService.getExams();
  }
}



