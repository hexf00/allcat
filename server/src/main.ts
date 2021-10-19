import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import HttpExceptionFilter from './filters/Exception.class';

console.log("监听 5922 ");
async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log('前端资源目录位于', __dirname)

  app.useGlobalFilters(new HttpExceptionFilter())
  app.useStaticAssets(join(__dirname, 'client'), {
    prefix: '/'
  })
  await app.listen(5922);
}
bootstrap();
