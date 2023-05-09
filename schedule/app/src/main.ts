import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //   }),
  // );
  // app.setGlobalPrefix('api/v1');

  await app.listen(8082);
}
bootstrap();
