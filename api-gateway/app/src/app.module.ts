import { Module } from '@nestjs/common';

import { ApiScheduleProvider } from './utils/apiProviders';
import { ScheduleModule } from './modules/schedule/schedule.module';

@Module({
  imports: [ScheduleModule],
  controllers: [],
  providers: [ApiScheduleProvider],
  exports: [ApiScheduleProvider],
})
export class AppModule {}
