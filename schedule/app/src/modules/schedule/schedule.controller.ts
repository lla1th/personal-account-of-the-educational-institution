import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  async getS(): Promise<any> {
    return '534';
  }

  @Post('hello')
  async createSchedule(@Body() payload: any): Promise<any> {
    return this.scheduleService.createSchedule(payload);
  }
}
