/**
 * DTO для ответа с какого либо сервиса
 */
export default class ServiceResponseDto<T> {
  message: string;

  data: T;
}
