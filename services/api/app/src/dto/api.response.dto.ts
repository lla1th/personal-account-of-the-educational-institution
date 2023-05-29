/**
 * DTO для ответа API
 */
export default class ApiResponseDto<T = any> {
  message: string;

  data?: T;
}
