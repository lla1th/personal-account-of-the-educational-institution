import { Api } from './api';
import { AUTH_API_TOOL, SCHEDULE_API_TOOL } from '../const/tokens';

export const ApiScheduleProvider = {
  provide: SCHEDULE_API_TOOL,
  useFactory: (): Api => new Api('http://node_schedule:8082/'),
};

export const ApiAuthProvider = {
  provide: AUTH_API_TOOL,
  useFactory: (): Api => new Api('http://node_fusionauth:8083/'),
};
