import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiAuthProvider } from '../../utils/apiProviders';

@Module({
  imports: [SequelizeModule.forFeature([])],
  controllers: [AuthController],
  providers: [AuthService, ApiAuthProvider],
})
export class AuthModule {}
