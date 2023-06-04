import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../../utils/api';
import { AUTH_API_TOOL } from '../../const/tokens';

@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_API_TOOL) private authApi: Api) {}

  async login(dto: any, res): Promise<any> {
    const {
      data: { accessToken },
    } = await this.authApi.post('auth/login', dto);

    console.log(accessToken, '<<<<<<<<<');
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      domain: 'localhost',
    });

    return {
      message: 'Авторизация прошла успешно',
    };
  }

  async statusToken(request): Promise<any> {
    return this.authApi.get('auth/check', {
      params: { token: request.cookies['access_token'] },
    });
  }

  async getUsers(): Promise<any> {
    return this.authApi.get('auth/users');
  }
}
