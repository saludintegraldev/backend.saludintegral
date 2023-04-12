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





  //TODO: PARA BORRAR O USAR //!OJO
  @Get()
  findAll() {
    return this.schedulerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schedulerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchedulerDto: UpdateSchedulerDto) {
    return this.schedulerService.update(+id, updateSchedulerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulerService.remove(+id);
  }
}



