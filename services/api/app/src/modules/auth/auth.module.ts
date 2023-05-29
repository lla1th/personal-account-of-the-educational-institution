import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ApiAuthProvider } from '../../utils/apiProviders';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, ApiAuthProvider],
  exports: [AuthService],
})
export class AuthModule {}
