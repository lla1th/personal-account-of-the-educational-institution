import { Module } from '@nestjs/common';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './utils/sequelize.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    ConfigModule.forRoot(),
    ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
