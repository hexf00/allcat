import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app/app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
