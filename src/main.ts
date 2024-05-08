import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";

async function bootstrap() {
  TonClient.useBinaryLibrary(libNode);
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api/v1');
  await app.listen(4000);
}
bootstrap();
