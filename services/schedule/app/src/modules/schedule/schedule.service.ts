import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';

import ScheduleModel from '../../model/schedule/schedule.model';
import CabinetModel from '../../model/cabinets/cabinet.model';
import ScheduleDto from './dto/schedule.dto';
import * as moment from 'moment';
import LessonsModel from '../../model/lessons/lessons.model';
import GroupModel from '../../model/well/well.model';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleModel) private scheduleModel: typeof ScheduleModel,
    @InjectModel(CabinetModel) private cabinetModel: typeof CabinetModel,
    @InjectModel(LessonsModel) private lessonsModel: typeof LessonsModel,
    @InjectModel(GroupModel) private groupModel: typeof GroupModel,
  ) {}

  /**
   * @description Получение расписания
   * @param dto
   */
  async getSchedule(dto: any): Promise<any> {
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
   * @description Получение списка расписания по дата в разделе "Расписание"
   * @param dto
   */
  async getScheduleDetail(dto: any): Promise<any> {
    const { dateFrom, dateTo, group } = dto;

    const condition = [];

    console.log(group?.length, '<<<<<<<<< group?.length');
    console.log(!!group?.length, '<<<<<<<<< !!group?.length');
    if (group?.length) {
      condition.push('schedule.group_id IN (:group)');
    }

    if (dateTo) {
      condition.push('schedule.date <= :dateTo');
    }

    if (dateFrom) {
      condition.push('schedule.date >= :dateFrom');
    }

    const where =
      condition.length > 0 ? `WHERE ${condition.join(' AND ')}` : '';

    // todo any
    const data: any = await this.scheduleModel.sequelize.query(
      `
      SELECT
          id,
          cabinet_id AS "cabinetId",
          lesson_id AS "lessonId",
          teacher_id AS "teacherId",
          group_id AS "groupId",
          sub_group AS "subGroup",
          date,
          pair,
          well
      FROM schedule
        ${where}
      ORDER BY date ASC
    `,
      {
        replacements: {
          dateTo,
          dateFrom,
          group,
        },
        logging: true,
        type: sequelize.QueryTypes.SELECT,
      },
    );

    return {
      data: data.map((item) => ({
        ...item,
        date: moment(item.date).format('DD.MM.YYYY'),
      })),
      message: 'Получение расписания',
    };
  }

  /**
   * @description Создание расписания
   * @param payload
   */
  async createSchedule(payload: ScheduleDto): Promise<any> {
    await this.scheduleModel.create({
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
   * @description Создания кабинета
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
   * @description Создания кабинета
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

  /**
   * ГРУППЫ
   */

  /**
   * @description Получение всех групп
   * @param dto
   */
  async getGroups(dto: any): Promise<any> {
    const data: any = await this.groupModel.sequelize.query(
      `
      SELECT
        id,
        full_name AS "fullName",
        short_name AS "shortName",
        "createdAt"
      FROM "group"
    `,
      {
        type: sequelize.QueryTypes.SELECT,
      },
    );

    return {
      data: data.map((item) => ({
        fullName: item.fullName,
        shortName: item.shortName,
        id: item.id,
      })),
      message: 'Получение курсов',
    };
  }

  /**
   * @description Создание группы
   * @param dto
   */
  async createGroup(dto: any): Promise<any> {
    await this.groupModel.upsert({
      ...(dto.id && { id: dto.id }),
      full_name: dto.fullName,
      short_name: dto.shortName,
    });

    return {
      message: 'Создание группы',
    };
  }
}
