import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Log4jsServer } from './logger/log4js.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
      cors: true,
      bufferLogs: true, 
  });
    app.useLogger(new Log4jsServer())
  await app.listen(3000);
}
bootstrap();
