import { Module } from '@nestjs/common';
import { AuthModule } from './modules/schedule/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './utils/sequelize.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    ConfigModule.forRoot(),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
