import { AxiosRequestConfig } from 'axios';

export interface HeadersInterface {
  'Content-type'?: string;
  authorization?: string;
  'x-context-id'?: string;
}
export type ConfigInterface = AxiosRequestConfig & {
  headers?: HeadersInterface;
};

interface ConfigDtoInterface {
  reqHeaders?: HeadersInterface;
  params?: Record<string, any>;
  contentType?: string;
}

/** Возвращает конфиг запроса с информацией о headers запроса */
export default ({
  reqHeaders,
  contentType = 'json',
  params,
}: ConfigDtoInterface): ConfigInterface => {
  const config: ConfigInterface = {
    headers: {
      'Content-Type': `application/${contentType}`,
    },
  };
  if (reqHeaders) {
    config.headers.authorization = reqHeaders.authorization;
  }
  if (params) {
    config.params = params;
  }
  return config;
};
