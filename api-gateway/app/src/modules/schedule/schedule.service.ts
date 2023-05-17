import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../../utils/api';
import { SCHEDULE_API_TOOL } from '../../const/tokens';

@Injectable()
export class ScheduleService {
  constructor(@Inject(SCHEDULE_API_TOOL) private databaseApi: Api) {}

  async getHello(): Promise<string> {
    console.log('3213213423');
    return 'eqwewq';
  }

  async pingSchedule(payload): Promise<any> {
    console.log(payload, '<<< payload');
    return this.databaseApi.post('schedule/hello', payload);
  }
}
