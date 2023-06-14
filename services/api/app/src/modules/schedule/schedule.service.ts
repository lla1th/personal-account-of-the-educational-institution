import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../../utils/api';
import { SCHEDULE_API_TOOL } from '../../const/tokens';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class ScheduleService {
  constructor(
      private readonly authService: AuthService,
      @Inject(SCHEDULE_API_TOOL) private databaseApi: Api
  ) {}

  async getSchedule(dto: any): Promise<any> {
    const { data } = await this.databaseApi.get('schedule', { params: dto });
    const {
      data: { cabinets, lessons, groups },
    } = await this.getInformation(dto);

    return {
      data: data.map(({ cabinetId, lessonId, groupId, ...item }) => {
        const searchCabinet = cabinets.find(({ id }) => id === cabinetId);
        const searchGroup = groups.find(({ id }) => id === groupId);
        const searchLessons = lessons.find(({ id }) => id === lessonId);

        return {
          ...item,
          cabinet: {
            id: searchCabinet.id,
            name: searchCabinet.shortName,
          },
          lesson: {
            id: searchLessons.id,
            name: searchLessons.name,
          },
          groups: {
            id: searchGroup.id,
            name: searchGroup.shortName,
          },
        };
      }),
    };
  }

  /**
   * Получение расписания по календарю
   * @param dto
   */
  async getScheduleDetail(dto: any): Promise<any> {
    const { data } = await this.databaseApi.get('schedule/detail', {
      params: dto,
    });

    const {
      data: { cabinets, lessons, groups },
    } = await this.getInformation(dto);

    const { data: users } = await this.authService.getUsers();

    const addingData = data.map(({ cabinetId, lessonId, groupId, teacherId, ...item }) => {
      const searchCabinet = cabinets.find(({ id }) => id === cabinetId);
      const searchGroup = groups.find(({ id }) => id === groupId);
      const searchLessons = lessons.find(({ id }) => id === lessonId);
      const searchUser = users.find(({ id }) => id === teacherId);

      const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

      moment

      return {
        ...item,
        cabinet: {
          id: searchCabinet.id,
          name: searchCabinet.shortName,
        },
        lesson: {
          id: searchLessons.id,
          name: searchLessons.name,
        },
        groups: {
          id: searchGroup.id,
          name: searchGroup.shortName,
        },
        teacher: {
          id: searchUser.id,
          name: searchUser.fullName,
        },
      };
    });

    const formatDataToDate = addingData.reduce((acc, { date, ...current }) => {
      const newAcc = [...acc];

      const findDate = newAcc.find((item) => item.date === date);
      if (!findDate) {
        return [
          ...newAcc,
          {
            date: date,
            content: [current],
          },
        ];
      }

      return newAcc.map((item) =>
        item.date !== date
          ? item
          : { ...item, content: [...item.content, current] },
      );
    }, []);

    return {
      data: formatDataToDate,
      message: 'Получения отфильтрованного списка расписания',
    };
  }

  async createSchedule(payload): Promise<any> {
    return this.databaseApi.post('schedule', payload);
  }

  async getCabinets(dto: any): Promise<any> {
    return this.databaseApi.get('schedule/cabinets', { params: dto });
  }

  async createCabinet(dto: any): Promise<any> {
    return this.databaseApi.post('schedule/cabinet', dto);
  }

  async getLessons(dto: any): Promise<any> {
    return this.databaseApi.get('schedule/lessons', { params: dto });
  }

  async createLessons(dto: any): Promise<any> {
    return this.databaseApi.post('schedule/lessons', dto);
  }

  async getGroups(dto: any): Promise<any> {
    return this.databaseApi.get('schedule/groups', dto);
  }

  async createGroups(dto: any): Promise<any> {
    return this.databaseApi.post('schedule/groups', dto);
  }

  async getInformation(dto: any): Promise<any> {
    const { data: cabinets } = await this.databaseApi.get('schedule/cabinets', {
      params: dto,
    });
    const { data: lessons } = await this.databaseApi.get('schedule/lessons', {
      params: dto,
    });

    const { data: groups } = await this.databaseApi.get('schedule/groups');

    return {
      data: {
        cabinets,
        lessons,
        groups,
      },
      message: 'Получение общей информации из сервисов',
    };
  }
}
