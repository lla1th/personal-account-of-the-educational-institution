import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../../utils/api';
import { SCHEDULE_API_TOOL } from '../../const/tokens';

@Injectable()
export class ScheduleService {
  constructor(@Inject(SCHEDULE_API_TOOL) private databaseApi: Api) {}

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
    return this.databaseApi.get('schedule/group', dto);
  }

  async getInformation(dto: any): Promise<any> {
    const { data: cabinets } = await this.databaseApi.get('schedule/cabinets', {
      params: dto,
    });
    const { data: lessons } = await this.databaseApi.get('schedule/lessons', {
      params: dto,
    });

    const { data: groups } = await this.databaseApi.get('schedule/group');

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
