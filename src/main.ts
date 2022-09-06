import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const validationPipe = new ValidationPipe();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validationPipe);
  await app.listen(4000);
}
bootstrap();
