import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';

import ScheduleModel from '../../model/schedule/schedule.model';
import CabinetModel from '../../model/cabinets/cabinet.model';
import ScheduleDto from './dto/schedule.dto';
import * as moment from 'moment';
import LessonsModel from '../../model/lessons/lessons.model';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleModel) private scheduleModel: typeof ScheduleModel,
    @InjectModel(CabinetModel) private cabinetModel: typeof CabinetModel,
    @InjectModel(LessonsModel) private lessonsModel: typeof LessonsModel,
  ) {}

  /**
   * Получение расписания
   * @param dto
   */
  async getSchedule(dto: any): Promise<any> {
    console.log('hello');
    const data: any = await this.cabinetModel.sequelize.query(
      `
      SELECT
        id,
        cabinet_id as "cabinetId",
        lesson_id as "lessonId",
        teacher_id as "teacherId",
        group_id as "groupId",
        "date",
        pair,
        self_training as "selfTraining",
        sub_group as "subGroup",
        "createdAt"
      FROM schedule
        WHERE is_deleted = false
    `,
      {
        type: sequelize.QueryTypes.SELECT,
      },
    );
    console.log(data, '<<<<<<, data');

    return {
      data: data.map((item) => ({
        ...item,
        createdAt: moment(item.createdAt).format('DD.MM.YYYY'),
        date: moment(item.date).format('DD.MM.YYYY'),
      })),
      message: 'Получение списка Предметов',
    };
  }

  /**
   * Создание расписания
   * @param payload
   */
  async createSchedule(payload: ScheduleDto): Promise<any> {
    console.log(payload, '<<<<<<<<< payload');
    const data = await this.scheduleModel.create({
      cabinet_id: payload.cabinet,
      teacher_id: payload.teacher,
      group_id: payload.group,
      date: payload.date,
      well: payload.well,
      lesson_id: payload.lesson,
      pair: payload.pair,
      self_training: payload.selfTraining,
      sub_group: payload.subGroup || null,
    });

    console.log(data, 'data ');

    return {
      message: 'Создание расписания',
    };
  }

  /**
   * КАБИНЕТЫ
   */

  async getCabinet(dto: any): Promise<any> {
    const data: any = await this.cabinetModel.sequelize.query(
      `
      SELECT
        id,
        full_name as "fullName",
        short_name as "shortName",
        "createdAt"
      FROM cabinets
    `,
      {
        type: sequelize.QueryTypes.SELECT,
      },
    );

    return {
      data: data.map((item) => ({
        ...item,
        createdAt: moment(data.createdAt).format('DD.MM.YYYY'),
      })),
      message: 'Получение списка кабинетов',
    };
  }

  /**
   * Создания кабинета
   * @param dto
   */
  async createCabinet(dto: any): Promise<any> {
    await this.cabinetModel.upsert({
      ...(dto.id && { id: dto.id }),
      full_name: dto.fullName,
      short_name: dto.shortName,
    });

    return {
      message: 'Создание кабинета в систему',
    };
  }

  /**
   * УЧЕБНЫЕ ПРЕДМЕТЫ
   */

  async getLessons(dto: any): Promise<any> {
    const data: any = await this.cabinetModel.sequelize.query(
      `
      SELECT
        id,
        name,
        code,
        "createdAt"
      FROM lessons
    `,
      {
        type: sequelize.QueryTypes.SELECT,
      },
    );

    return {
      data: data.map((item) => ({
        ...item,
        createdAt: moment(data.createdAt).format('DD.MM.YYYY'),
      })),
      message: 'Получение списка Предметов',
    };
  }

  /**
   * Создания кабинета
   * @param dto
   */
  async createLessons(dto: any): Promise<any> {
    await this.lessonsModel.upsert({
      ...(dto.id && { id: dto.id }),
      name: dto.name,
      code: dto.code,
    });

    return {
      message: 'Создание учебного расписания',
    };
  }
}
