import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import ScheduleModel from '../../model/schedule/schedule.model';
import { SequelizeModule } from '@nestjs/sequelize';
import CabinetModel from '../../model/cabinets/cabinet.model';
import LessonsModel from '../../model/lessons/lessons.model';

@Module({
  imports: [
    SequelizeModule.forFeature([ScheduleModel, CabinetModel, LessonsModel]),
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
