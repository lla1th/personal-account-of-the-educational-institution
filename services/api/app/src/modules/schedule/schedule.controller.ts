import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller()
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('schedule')
  getSchedule(@Query() dto: any): Promise<any> {
    return this.scheduleService.getSchedule(dto);
  }

  @Get('schedule/detail')
  getScheduleDetail(@Query() dto: any): Promise<any> {
    return this.scheduleService.getScheduleDetail(dto);
  }

  @Post('schedule')
  createSchedule(@Body() payload: any): Promise<any> {
    return this.scheduleService.createSchedule(payload);
  }

  @Get('schedule/cabinets')
  getCabinet(@Query() dto: any): Promise<any> {
    return this.scheduleService.getCabinets(dto);
  }

  @Post('schedule/cabinet')
  createCabinet(@Body() dto: any): Promise<any> {
    return this.scheduleService.createCabinet(dto);
  }

  @Get('schedule/lessons')
  getLessons(@Query() dto: any): Promise<any> {
    return this.scheduleService.getLessons(dto);
  }

  @Post('schedule/lessons')
  createLessons(@Body() dto: any): Promise<any> {
    return this.scheduleService.createLessons(dto);
  }

  @Get('information')
  getInformation(@Query() dto: any): Promise<any> {
    return this.scheduleService.getInformation(dto);
  }

  @Get('groups')
  getGroups(@Query() dto: any): Promise<any> {
    return this.scheduleService.getGroups(dto);
  }

  @Post('groups')
  createGroups(@Body() dto: any): Promise<any> {
    return this.scheduleService.createGroups(dto);
  }
}
