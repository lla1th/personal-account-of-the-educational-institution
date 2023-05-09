import { Api } from './api';
import { SCHEDULE_API_TOOL } from '../const/tokens';

export const ApiScheduleProvider = {
  provide: SCHEDULE_API_TOOL,
  useFactory: (): Api => new Api('http://node_schedule:8082/'),
};
