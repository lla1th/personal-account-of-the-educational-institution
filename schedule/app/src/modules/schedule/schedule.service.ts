import { Injectable } from '@nestjs/common';
import ScheduleModel from '../../model/schedule/schedule.model';
import { InjectModel } from '@nestjs/sequelize';
import ScheduleDto from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleModel) private scheduleModel: typeof ScheduleModel,
  ) {}

  getHello(): string {
    return 'Hello World! 1234322';
  }

  /**
   * Создание расписания
   * @param payload
   */
  async createSchedule(payload: ScheduleDto): Promise<any> {
    console.log(payload, 'payloaad');
    // await this.scheduleModel.create({
    //   cabinet_id: payload.cabinet,
    //   teacher_id: payload.teacher,
    //   group_id: payload.group,
    //   date: payload.date,
    //   pair: payload.pair,
    //   self_training: payload.selfTraining,
    //   sub_group: payload.subGroup,
    // });

    return {
      message: 'Создание расписания',
    };
  }
}
