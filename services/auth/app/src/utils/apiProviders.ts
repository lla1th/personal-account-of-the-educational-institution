import { Api } from './api';
import { FUSIONAUTH_API_TOOL } from '../const/tokens';

export const ApiAuthProvider = {
  provide: FUSIONAUTH_API_TOOL,
  useFactory: (): Api => new Api('http://fusionauth:9011/'),
};
