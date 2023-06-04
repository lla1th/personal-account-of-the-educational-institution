import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: any, @Res({ passthrough: true }) res): Promise<any> {
    return this.authService.login(dto, res);
  }

  @Get('check')
  async statusToken(@Query('token') dto: string): Promise<any> {
    return this.authService.statusToken(dto);
  }

  @Get('users')
  async getUsers(): Promise<any> {
    return this.authService.getUsers();
  }
}
