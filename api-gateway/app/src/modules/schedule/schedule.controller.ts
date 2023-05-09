import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller()
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  getHello(): Promise<string> {
    return this.scheduleService.getHello();
  }

  @Post('schedule')
  pingSchedule(@Body() payload: any): Promise<any> {
    return this.scheduleService.pingSchedule(payload);
  }
}
