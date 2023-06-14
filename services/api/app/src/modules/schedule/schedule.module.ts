import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ApiScheduleProvider } from '../../utils/apiProviders';
import { ScheduleService } from './schedule.service';
import {AuthModule} from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ScheduleController],
  providers: [ScheduleService, ApiScheduleProvider],
  exports: [ScheduleService],
})
export class ScheduleModule {}
