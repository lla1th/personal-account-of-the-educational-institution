import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ApiScheduleProvider } from '../../utils/apiProviders';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [],
  controllers: [ScheduleController],
  providers: [ScheduleService, ApiScheduleProvider],
  exports: [ScheduleService],
})
export class ScheduleModule {}
