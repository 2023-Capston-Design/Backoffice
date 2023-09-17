import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { GetSwaggerOption } from './docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { setting, customOption } = GetSwaggerOption();
  const document = SwaggerModule.createDocument(app, setting);
  SwaggerModule.setup('docs', app, document, customOption);

  await app.listen(4000);
}
bootstrap();
