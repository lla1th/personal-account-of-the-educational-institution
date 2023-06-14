import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  /**
   * СОЗДАНИЕ РАСПИСАНИЯ
   */
  @Get()
  async getSchedule(@Query() dto: any): Promise<any> {
    return this.scheduleService.getSchedule(dto);
  }

  @Get('detail')
  async getScheduleDetail(@Query() dto: any): Promise<any> {
    return this.scheduleService.getScheduleDetail(dto);
  }

  @Post()
  async createSchedule(@Body() payload: any): Promise<any> {
    return this.scheduleService.createSchedule(payload);
  }

  /**
   * КАБИНЕТЫ
   */

  @Get('cabinets')
  async getCabinet(@Query() dto: any): Promise<any> {
    return this.scheduleService.getCabinet(dto);
  }

  @Post('cabinet')
  async createCabinet(@Body() dto: any): Promise<any> {
    return this.scheduleService.createCabinet(dto);
  }

  /**
   * УЧЕБНЫЕ ПРЕДМЕТЫ
   */

  @Get('lessons')
  async getLessons(@Query() dto: any): Promise<any> {
    return this.scheduleService.getLessons(dto);
  }

  @Post('lessons')
  async createLessons(@Body() dto: any): Promise<any> {
    return this.scheduleService.createLessons(dto);
  }

  /**
   * ГРУППЫ
   */

  @Get('groups')
  async getGroups(@Query() dto: any): Promise<any> {
    return this.scheduleService.getGroups(dto);
  }

  @Post('groups')
  async createGroup(@Query() dto: any): Promise<any> {
    return this.scheduleService.createGroup(dto);
  }
}
