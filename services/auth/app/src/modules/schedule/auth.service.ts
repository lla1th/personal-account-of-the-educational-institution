import { HttpException, Inject, Injectable } from '@nestjs/common';
import { FUSIONAUTH_API_TOOL } from '../../const/tokens';
import { Api } from '../../utils/api';
import getHttpConfig from '../../utils/getHttpConfig';

@Injectable()
export class AuthService {
  constructor(@Inject(FUSIONAUTH_API_TOOL) private fusionauthApi: Api) {}

  async login(dto: any, res): Promise<any> {
    try {
      const reqHeaders = {
        authorization:
          'Dpv-trIFMu6qscX9-Uz8z1Xhw2Xic1E9iGOeCziQN4OL-3hrcGS4HIVF',
      };
      const config = getHttpConfig({ reqHeaders });

      const payload = {
        loginId: dto.username.trim(),
        password: dto.password.trim(),
        applicationId: 'e6f57b37-c617-4953-b243-ca0aa129a0f2',
      };

      const response = await this.fusionauthApi.post(
        'api/login',
        payload,
        config,
      );
      response.headers['set-cookie'].forEach((el) => {
        ['access_token', 'refresh_token'].forEach((e) => {
          if (el && el.includes(e)) {
            const info = el.split(';');
            const findMaxAge = info.find((property) =>
              property.includes('Max-Age'),
            );
            const maxAge = findMaxAge
              ? { maxAge: findMaxAge.replace('Max-Age=', '') }
              : {};
            const token = info[0].replace(`${e}=`, '');
            console.log(maxAge);
            console.log(e, '<<<<<< e');
            console.log(res, '<<<<<< res.token');
            res.cookie(e, token, {
              httpOnly: true,
              secure: false,
              expires: new Date(new Date().getTime() + 30 * 1000 * 2000),
              maxAge: 2592111,
            });
          }
        });
      });

      const { refreshToken, token: accessToken, user } = response.data;
      const { id: userId, registrations, data: dataUser } = user;
      const { roles } = registrations.find(
        ({ applicationId }) =>
          applicationId === 'e6f57b37-c617-4953-b243-ca0aa129a0f2',
      );
      const { userType = 'admin' } = dataUser || {};
      return {
        data: {
          refreshToken,
          accessToken,
          userId,
          roles,
          userType,
        },
        message: 'hello',
      };
    } catch ({ response: { status } }) {
      switch (status) {
        case 404:
          throw new HttpException({ message: 'bad' }, status);
        default:
          throw new HttpException({ message: 'bad 401 :(' }, status);
      }
    }
  }

  async statusToken(dto: string): Promise<any> {
    try {
      console.log(dto, '<<<<<<<<< dto');
      const reqHeaders = { authorization: `Bearer ${dto}` };
      const config = getHttpConfig({ reqHeaders });
      const response = await this.fusionauthApi.get('api/jwt/validate', config);

      return {
        data: {
          active: !!response,
        },
        message: 'hello',
      };
    } catch (error) {
      console.log('error::: ', error);

      const {
        response: { status },
      } = error;
      switch (status) {
        case 401:
          throw new HttpException({ message: 'bad' }, status);
        default:
          throw new HttpException({ message: 'bad 401 :(' }, status);
      }
    }
  }
}
