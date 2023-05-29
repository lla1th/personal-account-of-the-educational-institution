import { HttpException } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import ServiceResponseDto from '../dto/service.response.dto';
import { ConfigInterface } from './getHttpConfig';

export class Api {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 15000,
      responseType: 'json',
    });
  }

  private serviceResponse = <T>(
    response: AxiosResponse,
  ): ServiceResponseDto<T> => {
    const responseData = response.data;
    return {
      message: response.data.message,
      headers: response.headers,
      data: responseData.data !== undefined ? responseData.data : responseData,
    };
  };

  private static getConfig(
    config?: ConfigInterface,
    contextId?: string,
  ): ConfigInterface {
    const responseConfig = config || {};
    const contextHeader = contextId ? { 'x-context-id': contextId } : {};
    const configHeaders =
      config && config.headers
        ? { ...config.headers, ...contextHeader }
        : { ...contextHeader };
    return {
      ...responseConfig,
      headers: configHeaders,
    };
  }

  async get<T = any>(
    url: string,
    config?: ConfigInterface,
    contextId?: string,
  ): Promise<ServiceResponseDto<T>> {
    try {
      const responseConfig = Api.getConfig(config, contextId);
      const response = await this.instance.get(url, responseConfig);
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
          message: e.message,
        },
        e?.response?.status || 500,
      );
    }
  }

  async post<T = any>(
    url: string,
    data?,
    config?: ConfigInterface,
    contextId?: string,
  ): Promise<ServiceResponseDto<T>> {
    try {
      const responseData = data || {};
      const responseConfig = Api.getConfig(config, contextId);
      const response = await this.instance.post(
        url,
        responseData,
        responseConfig,
      );
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
          message: e.message,
        },
        e?.response?.status || 500,
      );
    }
  }

  async delete<T = any>(
    url: string,
    config?: ConfigInterface,
    contextId?: string,
  ): Promise<ServiceResponseDto<T>> {
    try {
      const responseConfig = Api.getConfig(config, contextId);
      const response = await this.instance.delete(url, responseConfig);
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
          message: e.message,
        },
        e?.response?.status || 500,
      );
    }
  }

  async patch<T = any>(
    url: string,
    data?,
    config?: ConfigInterface,
    contextId?: string,
  ): Promise<ServiceResponseDto<T>> {
    try {
      const responseData = data || {};
      const responseConfig = Api.getConfig(config, contextId);
      const response = await this.instance.patch(
        url,
        responseData,
        responseConfig,
      );
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
          message: e.message,
        },
        e?.response?.status || 500,
      );
    }
  }

  async put<T = any>(
    url: string,
    data?,
    config?: ConfigInterface,
    contextId?: string,
  ): Promise<ServiceResponseDto<T>> {
    try {
      const responseData = data || {};
      const responseConfig = Api.getConfig(config, contextId);
      const response = await this.instance.put(
        url,
        responseData,
        responseConfig,
      );
      return this.serviceResponse(response);
    } catch (e) {
      throw new HttpException(
        {
          ...e?.response?.data,
          message: e.message,
        },
        e?.response?.status || 500,
      );
    }
  }
}
