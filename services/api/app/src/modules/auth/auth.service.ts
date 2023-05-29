import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../../utils/api';
import { AUTH_API_TOOL } from '../../const/tokens';

@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_API_TOOL) private authApi: Api) {}

  async login(dto: any): Promise<any> {
    return this.authApi.post('auth/login', dto);
  }

  async statusToken(request): Promise<any> {
    return this.authApi.get('auth/check', {
      params: { token: request.cookies['fusionauth.at'] },
    });
  }
}
