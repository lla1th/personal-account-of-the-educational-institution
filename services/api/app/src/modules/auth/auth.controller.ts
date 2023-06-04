import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: any, @Res({ passthrough: true }) res): Promise<any> {
    return this.authService.login(dto, res);
  }

  @Get('check')
  async statusToken(@Req() request): Promise<any> {
    console.log(request.cookies);
    return this.authService.statusToken(request);
  }

  @Get('users')
  async getUsers(): Promise<any> {
    return this.authService.getUsers();
  }
}
