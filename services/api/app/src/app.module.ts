import { Module } from '@nestjs/common';

import { ApiAuthProvider, ApiScheduleProvider } from './utils/apiProviders';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ScheduleModule, AuthModule],
  controllers: [],
  providers: [ApiScheduleProvider, ApiAuthProvider],
  exports: [ApiScheduleProvider, ApiAuthProvider],
})
export class AppModule {}
