import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import ScheduleModel from '../../model/schedule/schedule.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ScheduleModel])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
