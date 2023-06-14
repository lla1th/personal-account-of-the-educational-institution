import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { WinstonModule } from 'nest-winston';
import loggerConfig from './utils/logger.config';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: WinstonModule.createLogger(loggerConfig),
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
    origin: 'http://localhost:5173',
  });
  app.setGlobalPrefix('api/v1');

  await app.listen(8081);
}
bootstrap();
